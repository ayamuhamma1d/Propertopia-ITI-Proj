import React from 'react';
import style from "./details.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faTreeCity } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faElevator } from '@fortawesome/free-solid-svg-icons';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { data } from './../../auth/firebase/Firebase';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const Details = () => {
  const [isWishlist, setIsWishlist] = useState(false);
  const addToWishlist = (index) => {
    setIsWishlist(!isWishlist);

  };
console.log(data)
  const { id, purpose } = useParams();
  let details;

  if (purpose == 'rent') {
    details = data[1];

  }
  else {
    details = data[0];
  };
  const detailsData = details[id - 1];


  const [bigPhoto, setBigPhoto] = useState(detailsData.image_url);
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <>
      <section className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto my-10'>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 items-stretch" >
            <div className="grid gap-4 p-5 me-3 ">

              <div  >
                <img
                  className={`${style.img} h-auto max-w-full rounded-lg`}
                  src={bigPhoto}
                  alt='BigPhoto'
                />

              </div>
              <div >
                <div className="grid "  >
                  <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                    responsive={{
                      desktop: {
                        breakpoint: {
                          max: 3000,
                          min: 1024,
                        },
                        items: 1,
                        partialVisibilityGutter: 40,
                      },
                      mobile: {
                        breakpoint: {
                          max: 464,
                          min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                      },
                      tablet: {
                        breakpoint: {
                          max: 1024,
                          min: 464,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                      },
                    }}
                    showDots
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable

                  >
                    <div className="grid grid-cols-4 gap-4 cursor-pointer" >
                      {detailsData.images.map((img, i) => (
                        <img
                          class={`${style.img}h-auto max-w-full rounded-lg `}
                          key={i}
                          src={img}
                          onClick={() => {
                            setBigPhoto(img);
                            setCurrentIndex(i);
                          }}
                        />
                      ))}

                    </div>
                  </Carousel>

                </div>

              </div>

            </div>
            <div >
              <div className='flex justify-between items-center'>
                <div className=''>
                  <h2 className="font-bold text-2xl md:text-3xl text-slate-950 font-[Poppins] py-3">{detailsData.type_of_unit}</h2>
                  <div className="my-5">
                    <FontAwesomeIcon className='me-3 text-beige' icon={faLocationDot} />
                    <span className="text-md text-slate-700"> Egypt</span>
                  </div>
                  <h6 className=" text-xl text-slate-900"><span className="font-bold text-xl text-beige">EGP </span> {detailsData.price || detailsData.meter_price}</h6>
                </div>
                <div className='flex justify-between align-items-center py-5' >
                  <Link className='p-3 cursor-pointer'>
                    <FontAwesomeIcon icon={isWishlist ? solidHeart : regularHeart} onClick={() => { addToWishlist() }} />
                  </Link>
                  <Link className='p-3'>
                    <FontAwesomeIcon icon={faShareNodes} style={{ color: "#080808", }} className='pe-2' />
                  </Link>
                </div>
              </div>

              <div >
                <h2 className="font-bold text-xl text-beige pt-3">Description :</h2>
                <p className=" my-5  text-slate-700"
                >
                  {` For ${detailsData.purpose} : Experience comfort in this charming ${detailsData.rooms} -bedroom apartment located on the 
                  ${detailsData.floor} floor with a delightful view of the main street. This property offers ${detailsData.bathrooms} bathroom,
                   a generous size of ${detailsData.area} square meters, and the convenience of cash or installment payment options.
                    Don't miss the chance to make this ${detailsData.type_of_unit} your new home.
                   For inquiries and to schedule a viewing, contact us via WhatsApp or call.`}

                </p>
              </div>
              <div class='grid grid-cols-1 text-lg md:grid-cols-2 font-[Poppins]'>
                <ul >
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faCity} />
                    <span class="pe-2 ">Type:</span>
                    <span className="text-gray-600">{detailsData.type_of_unit}</span> </li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faBed} />
                    <span class="pe-2 ">Bedrooms:</span>
                    <span className="text-gray-600">{detailsData.rooms}</span></li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faHouseCircleCheck} />
                    <span class="pe-2 ">Purpose:</span>
                    <span className="text-gray-600">{`For ${detailsData.purpose}`}</span> </li>
                  <li className='flex  py-1' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faStreetView} />
                    <span class="pe-2 ">View:</span>
                    <span className="text-gray-600">Main Street</span></li>

                </ul>

                <ul>

                  <li className='flex  py-1' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faBath} />
                    <span class="pe-2 ">Bathrooms: </span>
                    <span className="text-gray-600">{detailsData.bathrooms}</span></li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faMaximize} />
                    <span class="pe-2 ">Property size: </span>
                    <span className="text-gray-600">{detailsData.area}</span></li>
                  <li className='flex py-1 items-center' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faTreeCity} />
                    <span class="pe-2 ">Floor: </span>
                    {detailsData.type_of_unit == 'villa' ? (
                      <span className="text-gray-600">0</span>
                    ) : (
                      <span className="text-gray-600">{detailsData.floor}</span>
                    )}
                  </li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faSackDollar} />
                    <span class=" pe-2 ">Payment : </span>
                    <span className="text-gray-600">Cash or Installments</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </section >
    </>)
}


export default Details










