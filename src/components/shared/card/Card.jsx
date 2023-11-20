import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { auth, db } from './../../auth/firebase/Firebase';
import {
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
const Card = ({
  area,
  price,
  purpose,
  type_of_unit,
  image_url,
  bathrooms,
  rooms,
  pricePerDay,
  id,
  removeFromWishlist,
  location
}) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  useEffect(() => {
    checkWishlistItem(id);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkWishlistItem(id);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [id]);
  const checkWishlistItem = async (itemId) => {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(db, user.uid, itemId.toString());
      const docSnapshot = await getDoc(docRef);
      setIsWishlist(docSnapshot.exists());
    } else {
      setIsWishlist(false);
    }
  };
  const addToWishlist = async (itemId) => {
    const user = auth.currentUser;
    if (!user) {
      setShowLoginPopup(true);
      return;
    }
    const customId = itemId.toString();
    const docRef = doc(db, user.uid, customId);
    if (isWishlist) {
      try {
        await deleteDoc(docRef);
        setIsWishlist(false);
        removeFromWishlist(customId);
      } catch (error) {
        console.error('Error removing item from wishlist:', error);
      }
    } else {
      try {
        const wishlistItem = {
          id: itemId,
          image_url: image_url,
          area: area,
          purpose: purpose,
          type_of_unit: type_of_unit,
          bathrooms: bathrooms,
          rooms: rooms,
          location: location
        };
        if (purpose === 'sale') {
          wishlistItem.price = price;
        } else if (purpose === 'rent') {
          wishlistItem.pricePerDay = pricePerDay;
        }
        await setDoc(docRef, wishlistItem);
        setIsWishlist(true);
        console.log('Item added to wishlist');
      } catch (error) {
        console.error('Error adding item to wishlist:', error);
      }
    }
  };
  const handleShare = () => {
    if (navigator.share) {
      const propertyDetails = `
        Property Details:
        Type: ${type_of_unit}
        Purpose: ${purpose}
        Rooms: ${rooms}
        Bathrooms: ${bathrooms}
        Area: ${area}m
        Price: ${purpose === 'sale' ? 'EGP' + price.toLocaleString() : 'EGP' + pricePerDay.toLocaleString()}
      `;
      navigator
        .share({
          title: 'Check out this property',
          text: 'I found this amazing property and thought you might be interested!\n\n' + propertyDetails,
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
    }
  };
  const handleLoginPopupClose = () => {
    setShowLoginPopup(false);
  };
  return (
    <div className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10'>
      
      <div className="flex  gap-10 flex-wrap  justify-center items-center">
        <div className="w-full max-w-sm font-serif  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='relative '>
            <Link to={`/details/${id}/${purpose}`}>
              <img src={image_url} alt="" />
            </Link>
            <div className={`absolute top-2 left-3 bg-black p-2`}>
              <p className="text-white font-serif ">For {purpose}</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <div className="flex items-center justify-between mb-3 pt-3">
              <Link className="font-medium capitalize font-serif  ">
                {type_of_unit}
              </Link>
              <span className="text-lg font-bold font-serif "><span className="me-1">EGP</span>{purpose === 'sale' ? price.toLocaleString() : pricePerDay.toLocaleString()}</span>
            </div>
            <div className='flex justify-between font-serif items-center border-b pb-2'>
              <div>
                <p>
                  <FontAwesomeIcon icon={faBed} style={{ color: "#000000" }} className='me-2' />
                  {rooms}
                </p>
              </div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faBath} style={{ color: "#000000" }} className='me-2' />
                  {bathrooms}
                </p>
              </div>
              <div>
                <p className=' font-serif '>
                  <FontAwesomeIcon icon={faHome} className='me-2 font-serif ' />
                  {area}m
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5 mb-5">
              <div>
                <p className="">
                  <FontAwesomeIcon className='pr-1 font-serif ' icon={faMapMarkerAlt} />
                  {location.split(' ').slice(0, 3).join(' ')}
                </p>
              </div>
              <div>
                {auth.currentUser ? (
                  <>
                    <Link className='pr-3'>
                      <FontAwesomeIcon
                        icon={isWishlist ? solidHeart : regularHeart}
                        onClick={() => addToWishlist(id)}
                      />
                    </Link>
                    <Link onClick={handleShare}>
                      <FontAwesomeIcon
                        icon={faShareAlt}
                        style={{ color: "#080808" }}
                        className='pe-2 cursor-pointer'
                      />
                    </Link>
                  </>
                ) : (
                  <div className='flex' >
                    <p onClick={() => setShowLoginPopup(true)}>
                      <Link className='pr-3'>
                        <FontAwesomeIcon
                          icon={isWishlist ? solidHeart : regularHeart}
                        />
                      </Link>
                    </p>
                    <Link onClick={handleShare}>
                      <FontAwesomeIcon
                        icon={faShareAlt}
                        style={{ color: "#080808" }}
                        className='pe-2 cursor-pointer'
                      />
                    </Link>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLoginPopup && (
        <div className={`fixed inset-0  bg-gray-600 bg-opacity-50 flex justify-center items-center`}>
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <p className='font-[Poppins] mb-5 text-center '>
              Please log in to add to your wishlist.
            </p>
            <div className="flex justify-center items-center mt-5">
              <Link to="/login" className="bg-beige1 mr-5 font-serif  px-6 py-2 rounded-md ">
                Log In
              </Link>
              <button className="bg-red-800 mr-5 text-white font-serif   px-6 py-2 rounded-md " onClick={handleLoginPopupClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
