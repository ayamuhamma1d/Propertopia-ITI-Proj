import React from "react";
import maintenance1 from "./../../assets/img/istockphoto-587782652-612x612.jpg";
import model from "./../../assets/img/3d-rendering-exterior-modern-house-with-good-design.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import style from "./service.module.css";
import "../maintenance/maintenance.css"
import maintenance2 from '../../../src/assets/img/Maintenance1/1 (7).jpg';
import { Link } from "react-router-dom";
import picone from "../../assets/img/slider/1.jpg";
import pictwo from "../../assets/img/slider/2.jpg";
import picthree from "../../assets/img/slider/3.jpg";
import picfour from "../../assets/img/slider/4.jpg";
import picfive from "../../assets/img/slider/5.jpg";
import picsix from "../../assets/img/slider/6.jpg";
import picseven from "../../assets/img/slider/7.jpg";
import piceight from "../../assets/img/slider/8.jpg";
import picnine from "../../assets/img/slider/9.jpg";
import picten from "../../assets/img/slider/10.jpg";
const Service = () => {
  return (
    <>
      <div className={`${style.parentt} mb-20 `}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide >
          <img src={picthree} alt="" className={`w-6/12 m-auto ${style.services_slider_img}` }/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picone} alt="" className={`w-6/12 m-auto ${style.services_slider_img}` }/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pictwo} alt="" className={`w-6/12 m-auto ${style.services_slider_img}` }/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picfour} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picfive} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picsix} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picseven} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={piceight} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picnine} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={picten} alt="" className={`w-6/12 m-auto ${style.services_slider_img}`}/>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="  mt-5 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
        <div
          className={`${style.mrSection} mx-auto grid grid-cols-1 lg:grid-cols-2  items-center 
          max-w-xl lg:max-w-full	 dark:bg-gray-800  mb-16`}
        >
          <div>
            <img
              className={`${style.img}  max-w-full `}
              src={maintenance1}
              alt="1"
            />
          </div>
          <div className="p-4 w-11/12 m-auto ">
            <h5 className="mb-5 text-start  text-3xl font-serif  capitalize font-bold tracking-tight text-beige dark:text-white">
              Buy& sell
            </h5>
            <p className=" font-normal text-base  font-serif 	 text-start text-gray-700 dark:text-gray-400">
            Uncover Your Oasis: Immerse Yourself in a Visual Journey to Your Ideal Home. Unlock Unparalleled Properties, Tailored for Renting Flexibility or Forever Ownership. Your Dream Home Beckons—Dive In, Select, and Claim it as Yours. Elevate Your Living Experience with Every Click.
            </p>
          </div>
        </div>
        <div
          className={`${style.mrSection} "row  mx-auto grid grid-cols-1 lg:grid-cols-2  items-center bg-zinc-50    
          max-w-xl lg:max-w-full    mb-16`}
        >
          <div className={`${style.contentOrder} w-11/12 m-auto" p-4`}>
            <h5 className="mb-5 text-start text-3xl font-bold tracking-tight text-beige  dark:text-white capitalize ">
              Maintenance
            </h5>
            <p className=" font-normal text-start  font-serif  text-gray-700 dark:text-gray-400">
            Revitalize Your Space: Elevate Living with Our Exclusive Maintenance Magic. From Top-Notch Upkeep to Seamless Repairs, Experience Unparalleled Enhancements for a Truly Worry-Free Lifestyle. Find Serenity in our Dedicated Maintenance Unit – Where Your Home Receives Meticulous Care, Redefining Comfort and Convenience.            </p>
          </div>
          <div className={style.photoOrder}>
            <img
              className={`${style.img} h-96 max-w-full `}
              src={maintenance2}
              alt="1"
            />
          </div>
        </div>
        <div
          className={`${style.mrSection} mx-auto grid grid-cols-1 lg:grid-cols-2  items-center 
          max-w-xl lg:max-w-full	 dark:bg-gray-800 mb-16`}
        >
          <div>
            <img
              className={`${style.img} h-96 max-w-full `}
              src={model}
              alt="1"
            />
          </div>
          <div className="p-4  w-11/12 m-auto">
            <h5 className="mb-5 text-start font-serif   text-3xl font-bold tracking-tight text-beige dark:text-white">
              3D MODEL
            </h5>
            <p className=" font-normal   font-serif 	 text-start text-gray-700 dark:text-gray-400">
            Revolutionize Your Showcase: Step into the Future with Our State-of-the-Art 3D Services. Immerse Your Audience in Captivating Virtual Tours, Beyond Ordinary Images. Whether Selling or Renting, Elevate Your Listings and Dominate the Market with Our Exclusive 3D Offerings. Redefine the Art of Presentation.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${style.mrSection} w-full bg-zinc-50  p-4 text-center   rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 `}
      >
        <h3 className="text-xl mb-7 md:text-3xl font-bold   font-serif  dark:text-white">
          Contact customer service
        </h3>
        <div className="items-center justify-center ">
          <Link
            className=" m-2 sm:w-sm w-auto bg-beige1  hover:bg-black py-4 hover:text-white text-black  inline-flex items-center justify-center px-6 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <FontAwesomeIcon className="mr-3 w-7 " icon={faEnvelope} />
            <div>
              <div className="-mt-1 font-serif  text-sm font-semibold">
                service@gmail.com
              </div>
            </div>
          </Link>
          <Link
            className=" m-2 sm:w-sm w-auto bg-beige1  hover:bg-black py-4  hover:text-white  text-black  inline-flex items-center justify-center px-6 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <FontAwesomeIcon className="mr-3 w-7 " icon={faPhone} />
            <div>
              <div className="-mt-1 font-serif  text-sm font-semibold">
                +0123456789
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Service;
