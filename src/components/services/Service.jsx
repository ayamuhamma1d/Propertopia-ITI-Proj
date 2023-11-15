import React from "react";
import photoo from "./../../assets/img/13.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.png";
import style from "./service.module.css";

const Service = () => {
  return (
    <>
      <div className={`${style.parentt} w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto `}>
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
          <SwiperSlide className="flex justify-center items-center" >
              <h2 className="text-start text-sm lg:text-2xl w-5/12		 ">
                Explore a diverse collection of properties and find your perfect
                match on our user-friendly real estate site.
              </h2>
            <img src={logo} alt="" className="w-6/12  " />
          </SwiperSlide>
            <SwiperSlide>
            <img src={logo} alt="" className="w-6/12 m-auto " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" className="w-6/12 m-auto "  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt=""  className="w-6/12 m-auto "  />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" className="w-6/12 m-auto "  />
          </SwiperSlide>  
        </Swiper>
      </div>

      <div className=" mt-5 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
        <div
          className={`${style.mrSection} mx-auto grid grid-cols-1 lg:grid-cols-2  items-center bg-beige1 border border-gray-200 rounded-lg shadow 
          max-w-xl lg:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <div>
            <img
              className={`${style.img} h-auto max-w-full rounded-lg`}
              src={photoo}
              alt="1"
            />
          </div>
          <div className="p-4 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repudiandae facere quibusdam enim cupiditate quidem similique nisi
              fugit, explicabo ipsam id rem accusamus sunt beatae nemo quas
              error sit quod ipsa repellat laborum quo hic facilis. Soluta ex
              perspiciatis explicabo esse, atque cupiditate eius cumque nulla
              sed, dicta dolor expedita?
            </p>
          </div>
        </div>

        <div
          className={`${style.mrSection} "row  mx-auto grid grid-cols-1 lg:grid-cols-2  items-center bg-beige1 border border-gray-200 rounded-lg shadow 
          max-w-xl lg:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <div className={`${style.contentOrder} p-4`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repudiandae facere quibusdam enim cupiditate quidem similique nisi
              fugit, explicabo ipsam id rem accusamus sunt beatae nemo quas
              error sit quod ipsa repellat laborum quo hic facilis. Soluta ex
              perspiciatis explicabo esse, atque cupiditate eius cumque nulla
              sed, dicta dolor expedita?
            </p>
          </div>
          <div className={style.photoOrder}>
            <img
              className={`${style.img} h-auto max-w-full rounded-lg`}
              src={photoo}
              alt="1"
            />
          </div>
        </div>

        <div
          className={`${style.mrSection} mx-auto grid grid-cols-1 lg:grid-cols-2  items-center bg-beige1 border border-gray-200 rounded-lg shadow 
          max-w-xl lg:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700`}
        >
          <div>
            <img
              className={`${style.img} h-auto max-w-full rounded-lg`}
              src={photoo}
              alt="1"
            />
          </div>
          <div className="p-4 ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className=" font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              repudiandae facere quibusdam enim cupiditate quidem similique nisi
              fugit, explicabo ipsam id rem accusamus sunt beatae nemo quas
              error sit quod ipsa repellat laborum quo hic facilis. Soluta ex
              perspiciatis explicabo esse, atque cupiditate eius cumque nulla
              sed, dicta dolor expedita?
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${style.mrSection} w-full  p-4 text-center  bg-beige1 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700`}
      >
        <h3 className="text-xl mb-7 md:text-3xl font-bold text-gray-900 dark:text-white">
          CONTACT CUSTOMER SERVICE
        </h3>
        <div className="items-center justify-center ">
          <a
            href="#"
            className=" m-2 sm:w-sm w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <FontAwesomeIcon className="mr-3 w-7 h-7" icon={faEnvelope} />
            <div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                service@gmail.com
              </div>
            </div>
          </a>
          <a
            href="#"
            className="m-2 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <FontAwesomeIcon className="mr-3 w-7 h-7" icon={faPhone} />
            <div>
              <div className="-mt-1 font-sans text-sm font-semibold">
                +0123456789
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Service;
