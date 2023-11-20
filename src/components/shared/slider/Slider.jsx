import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../auth/firebase/Firebase";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const sliderdata = data[3];
console.log(sliderdata);
export default function App() {
  return (
    <>
<div className="w-full slider_slide m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto ">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768 : {
              slidesPerView:2,
            },
            1024 : {
              slidesPerView:3,
            },
           
          }}
        >
          {data[3].map((item) => (
            <SwiperSlide>
              <div className="flex slider_small flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 mb-10">
                <div >
                  <Link to={`/details/${item.id}/${item.purpose}`}>
                    <img
                      src={item.image_url}
                      alt=""
                      className="h-64 object-cover w-full mb-4 sm:h-64 dark:bg-gray-500"
                    />
                  </Link>
                  <h2 className="text-slate-900 px-4 text-sm font-bold font-serif mt-2">
                    <FontAwesomeIcon
                      className="me-3 text-beige"
                      icon={faLocationDot}
                    />
                    {item.location}
                  </h2>
                  
                  <h6 className="text-slate-900 px-4 mb-1 text-lg font-bold font-serif mt-2 pb-2">
                    <span className="text-lg text-beige">$ </span>{" "}
                    {item.price.toLocaleString()}
                  </h6>{" "}
                 
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
