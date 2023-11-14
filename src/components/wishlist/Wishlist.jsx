import React, { useEffect, useState } from 'react';
import { db } from './../auth/firebase/Firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth } from "../auth/firebase/Firebase";
import Card from '../shared/card/Card';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUuid(user.uid);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const getCollectionData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, uuid));
      const collectionData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const docId = doc.id;
        return { docId, ...data };
      });
      setWishlist(collectionData); 
    } catch (error) {
      console.error("Error getting collection data: ", error);
    }
  };

  useEffect(() => {
    if (uuid) {
      getCollectionData();
    }
  }, [uuid]);

  const removeFromWishlist = async (docId) => {
    try {
      await deleteDoc(doc(db, uuid, docId));
      setWishlist((prevWishlist) =>
        prevWishlist.filter((card) => card.docId !== docId)
      );
      console.log("Item removed from wishlist");
    } catch (error) {
      console.error("Error removing item from wishlist: ", error);
    }
  };

  return (
    <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto h-auto">
      <div className="flex flex-wrap justify-center">
        {wishlist.map((card) => (
          <div key={card.docId} className="mb-2">
            <Card {...card} removeFromWishlist={removeFromWishlist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;