import React from "react";
import style from "./details.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faTreeCity } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faHouseCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faSquareParking } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faElevator } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "./../../auth/firebase/Firebase";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import Feedback from "../../shared/feedback/feedback";
import { auth, db } from "../../auth/firebase/Firebase";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
const Details = () => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { id, purpose } = useParams();
  let details;

  if (purpose == "rent") {
    details = data[1];
  } else {
    details = data[0];
  }
  const detailsData = details[id - 1];
  const [bigPhoto, setBigPhoto] = useState(detailsData.image_url);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    checkWishlistItem(detailsData.id);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkWishlistItem(detailsData.id);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [detailsData.id]);
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
    if (user) {
      const customId = itemId.toString();
      const docRef = doc(db, user.uid, customId);
      if (isWishlist) {
        try {
          await deleteDoc(docRef);
          setIsWishlist(false);
          removeFromWishlist(customId);
        } catch (error) {
          return (
            <p className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative font-serif">
              {error}
            </p>
          );
        }
      } else {
        try {
          const wishlistItem = {
            id: itemId,
            image_url: detailsData.image_url,
            area: detailsData.area,
            purpose: detailsData.purpose,
            type_of_unit: detailsData.type_of_unit,
            bathrooms: detailsData.bathrooms,
            rooms: detailsData.rooms,
            location: detailsData.location,
          };
          if (detailsData.purpose === "sale") {
            wishlistItem.price = detailsData.price;
          } else if (detailsData.purpose === "rent") {
            wishlistItem.pricePerDay = detailsData.pricePerDay;
          }
          await setDoc(docRef, wishlistItem);
          setIsWishlist(true);
          console.log("Item added to wishlist");
        } catch (error) {
          return (
            <p className="bg-beige1 border border-beige text-beige px-4 py-3 text-xs rounded relative font-serif">
              {error}
            </p>
          );
        }
      }
    }
  };
  const handleShare = async () => {
    if (navigator.share) {
      try {
        const propertyDetails = `
          Property Details:
          Type: ${detailsData.type_of_unit}
          Purpose: ${detailsData.purpose}
          Rooms: ${detailsData.rooms}
          Bathrooms: ${detailsData.bathrooms}
          Area: ${detailsData.area}m
          Price: ${detailsData.purpose === 'sale' ? 'EGP' + detailsData.price.toLocaleString() : 'EGP' + detailsData.pricePerDay.toLocaleString()}
        `;

        await navigator.share({
          title: 'Check out this property',
          text: 'I found this amazing property and thought you might be interested!\n\n' + propertyDetails,
          url: window.location.href,
        });

        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported');
    }
  };
  return (
    <>
      <section className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto my-10">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 items-stretch">
            <div className="grid gap-4 p-5 me-3 ">
              <div>
                <img
                  className={`${style.img} h-auto max-w-full rounded-lg`}
                  src={bigPhoto}
                  alt="BigPhoto"
                />
              </div>
              <div>
                <div className="grid ">
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
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                  >
                    <div className="grid grid-cols-4 gap-4 cursor-pointer">
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
            <div>
              <div className="flex justify-between items-center">
                <div className="">
                  <h2 className="font-bold text-2xl md:text-3xl font-serif text-slate-950 font-serif py-3  capitalize">
                    {detailsData.type_of_unit}
                  </h2>
                  <div className="my-5">
                    <FontAwesomeIcon
                      className="me-3 text-beige"
                      icon={faLocationDot}
                    />
                    <span className="text-md text-slate-700 font-serif">
                      {" "}
                      {detailsData.location}
                    </span>
                  </div>
                  <h6 className=" text-xl text-slate-900 font-serif">
                    <span className="font-bold text-xl text-beige font-serif">EGP </span>{" "}
                    {details.purpose == "sale"
                      ? detailsData.price.toLocaleString()
                      : detailsData.meter_price.toLocaleString()}
                  </h6>
                </div>
                <div className="flex justify-between align-items-center py-5 font-serif">
                  <Link className="p-3 cursor-pointer font-serif">
                    <FontAwesomeIcon
                      icon={isWishlist ? solidHeart : regularHeart}
                      onClick={() => {
                        addToWishlist(detailsData.id);
                      }}
                    />
                  </Link>
                  <Link className="p-3">
                    <FontAwesomeIcon
                      icon={faShareNodes}
                      style={{ color: "#080808" }}
                      className="pe-2"
                      onClick={() => {
                      
                          handleShare();
                     
                      }}
                    />
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="font-bold text-xl text-beige pt-3 font-serif ">
                  Description :
                </h2>
                <p className=" mb-8 mt-2  text-slate-700 font-serif">
                  {` For ${detailsData.purpose} : Experience comfort in this charming ${detailsData.rooms} -bedroom apartment located on the 
                  ${detailsData.floor} floor with a delightful view of the main street. This property offers ${detailsData.bathrooms} bathroom,
                   a generous size of ${detailsData.area} square meters, and the convenience of cash or installment payment options.
                    Don't miss the chance to make this ${detailsData.type_of_unit} your new home.
                   For inquiries and to schedule a viewing, contact us via WhatsApp or call.`}
                </p>
              </div>
              <div class="grid grid-cols-1 text-lg md:grid-cols-2 font-serif">
                <ul>
                  <li className="flex py-1 items-center font-serif">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faCity}
                    />
                    <span class="pe-2 font-serif">Type:</span>
                    <span className="text-gray-600 capitalize">
                      {detailsData.type_of_unit}
                    </span>{" "}
                  </li>
                  <li className="flex py-1 items-center ">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faBed}
                    />
                    <span class="pe-2 font-serif">Bedrooms:</span>
                    <span className="text-gray-600">{detailsData.rooms}</span>
                  </li>
                  <li className="flex py-1 items-center font-serif">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faHouseCircleCheck}
                    />
                    <span class="pe-2 font-serif">Purpose:</span>
                    <span className="text-gray-600">{`For ${detailsData.purpose}`}</span>{" "}
                  </li>
                  <li className="flex  py-1 ">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faStreetView}
                    />
                    <span class="pe-2 font-serif">View:</span>
                    <span className="text-gray-600">Main Street</span>
                  </li>
                </ul>

                <ul>
                  <li className="flex  py-1">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faBath}
                    />
                    <span class="pe-2 font-serif">Bathrooms: </span>
                    <span className="text-gray-600">
                      {detailsData.bathrooms}
                    </span>
                  </li>
                  <li className="flex py-1 items-center ">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faMaximize}
                    />
                    <span class="pe-2 font-serif">Property size: </span>
                    <span className="text-gray-600">{detailsData.area}</span>
                  </li>
                  <li className="flex py-1 items-center">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faTreeCity}
                    />
                    <span class="pe-2 font-serif">Floor: </span>
                    {detailsData.type_of_unit == "villa" ? (
                      <span className="text-gray-600">0</span>
                    ) : (
                      <span className="text-gray-600">{detailsData.floor}</span>
                    )}
                  </li>
                  <li className="flex py-1 items-center ">
                    <FontAwesomeIcon
                      className={`${style.iconscolor} me-2 text-beige`}
                      icon={faSackDollar}
                    />
                    <span class=" pe-2 ">Payment : </span>
                    <span className="text-gray-600">Cash or Installments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" mx-auto my-10 mb-20">
            <h5 className="font-bold text-xl md:text-2xl text-slate-950 font-serif py-3 capitalize text-left ">
              3D Model
            </h5>
            <iframe
              src={detailsData.iframe}
              className={`${style.height3d} w-full`}
            ></iframe>
          </div>
        </div>
        <h5 className="font-bold text-xl md:text-2xl text-slate-950 font-serif py-3 capitalize text-left ">
          Location of unit
        </h5>
        <iframe
          src={detailsData.map_iframe}
          className={`${style.height3d} w-full mb-20`}
        />
        <h5 className="font-bold text-xl md:text-2xl text-slate-950 font-serif py-3 capitalize  ">
          Clients Feedback
        </h5>
        <Feedback />

      </section>
    </>
  );
};

export default Details;
