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
      return <p  className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative font-[Poppins]">{error}</p>
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
    } catch (error) {
      return <p  className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative font-[Poppins]">{error}</p>
    }
  };
  return (
    <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto h-auto mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-1 justify-center">
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
