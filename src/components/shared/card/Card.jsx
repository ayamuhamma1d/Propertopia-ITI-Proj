import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import CardImg from "../../../assets/img/12.jpg";
import CardImg1 from "../../../assets/img/13.jpg";
import CardImg2 from "../../../assets/img/14.jpg";
import { NavLink, Link } from "react-router-dom";
const Card = ({ type, title }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const addToWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10'>
      <div className="flex  gap-10 flex-wrap  justify-center items-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className='relative '>
            <a href="#">
              <img src={CardImg} alt="" />
            </a>
            <div className={`absolute top-2 left-3 bg-black p-2`}>
              <p className="text-white">{type}</p>
            </div>
          </div>
          <div className="px-5 pb-5">
            <div className="flex items-center justify-between mb-3 pt-3">
              <a href="#" className="font-medium">
                {title}
              </a>
              <span className="text-xl font-bold  ">$599</span>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <p>
                  <FontAwesomeIcon icon={faBed} style={{ color: "#000000" }} className='me-2' />
                  BedNum.
                </p>
              </div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faBath} style={{ color: "#000000" }} className='me-2' />
                  bathNum.
                </p>
              </div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faHouse} className='me-2' />
                  area
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5 mb-5">
              <div>
                <p>
                  <FontAwesomeIcon className='pr-1' icon={faLocationDot} />
                  location
                </p>
              </div>
              <div>
                <Link className='pr-3'>
                  <FontAwesomeIcon
                    icon={isWishlist ? faHeart : faBed}
                    onClick={addToWishlist}
                  />
                </Link>
                <a href="">
                  <FontAwesomeIcon
                    icon={faShareNodes}
                    style={{ color: "#080808" }}
                    className='pe-2'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;