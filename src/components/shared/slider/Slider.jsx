// import React from 'react';
// import ReactCardSlider from "react-card-slider-component";
// import CardSlider1 from "../../../assets/img/1.jpg";
// import CardSlider2 from "../../../assets/img/2.jpg";
// import CardSlider from "../../../assets/img/3.jpg";
// import CardSlider4 from "../../../assets/img/4.jpg";
// import CardSlider5 from "../../../assets/img/5.jpg";

// const Slider = (props) => {
//   console.log(props[20].image_url);

//   const slides = [
//     {
//       image: CardSlider1,
//       title: "This is a title 1",
//       description: "Villa",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: CardSlider,
//       title: "This is a second title 2",
//       description: "Flat",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: CardSlider2,
//       title: "This is a third title 3",
//       description: "Studio",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: CardSlider4,
//       title: "This is a third title 4",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: CardSlider5,
//       title: "This is a third title 5",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: props[20].image_url,
//       title: "This is a third title 6",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 7",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 8",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 9",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 11",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 12",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 13",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     },
//     {
//       image: "https://picsum.photos/700/600",
//       title: "This is a third title 14",
//       description: "This is a third description",
//       clickEvent: "sliderClick"
//     }
//   ];

//   return (
//     <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto py-10">
//       <ReactCardSlider slides={slides} autoplay scroll />
//     </div>
//   );
// }

// export default Slider;

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
      {/* <div className="w-full slider_slide m-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
        <Swiper
          slidesPerView={3}
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
        >
          {data[3].map((item) => (
            <SwiperSlide>
              <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div>
                <Link to={`/details/${item.id}/${item.purpose}`}>
                  <img
                    src={item.image_url}
                    alt=""
                    className=" h-64  object-cover w-full mb-4 sm:h-64 dark:bg-gray-500"
                  />

            </Link>
                  <h2 className="text-slate-900 px-4  text-sm font-bold font-serif mt-2">
                    <FontAwesomeIcon
                      className="me-3 text-beige"
                      icon={faLocationDot}
                    />
                    {item.location}{" "}
                  </h2>
                  <h6 className=" text-slate-900 px-4 mb-2  text-lg font-bold font-serif mt-2">
                    <span className=" text-lg text-beige">$ </span>{" "}
                    {item.price.toLocaleString()}
                  </h6>{" "}
                </div>
              </div>
            </SwiperSlide>
          ))}
         
        </Swiper>
      </div> */}

<div className="w-full slider_slide m-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
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
            // Responsive breakpoints
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
              <div className="flex slider_small flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
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
                  
                  <h6 className="text-slate-900 px-4 mb-1 text-lg font-bold font-serif mt-2">
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
