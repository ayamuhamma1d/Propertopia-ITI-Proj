
import React, { useEffect } from 'react';
import { db } from './../auth/firebase/Firebase';
import { doc, collection, getDoc } from 'firebase/firestore';

const Wishlist = () => {
  useEffect(() => {
    const fetchWishlistData = async () => {
      try {
        const cityRef = db.collection("wishlist")

        const doc = await cityRef.get();
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
        }
      } catch (error) {
        console.log('Error getting wishlist data:', error);
      }
    };

    fetchWishlistData();
  }, []);

  return <div>Wishlist</div>;
};

export default Wishlist;