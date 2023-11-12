import { useState } from 'react';

const useGetWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((wishlistItem) => wishlistItem !== item)
    );
  };

  return { wishlist, addToWishlist, removeFromWishlist };
};

export default useGetWishlist;