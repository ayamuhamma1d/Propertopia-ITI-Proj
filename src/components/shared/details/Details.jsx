import React from 'react'
import photoo from './../../../assets/img/beace5158805561.6392196298760.jpg';
import dphoto from './../../../assets/img/Maintenance/gettyimages-1268557129-612x612.jpg';
import aphoto from './../../../assets/img/Maintenance/gettyimages-961748068-612x612.jpg';

import style from "./details.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


const Details = () => {

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  // const items = [{ url: photosellrent }, { url: photomaintance },
  // { url: photosellrent }, { url: photomaintance }]

  // const items = [{ url: photosellrent, style: style.firstgroup }, { url: photomaintance, style: style.secondgroup },
  //   { url: photosellrent, style: style.secondgroup }, { url: photomaintance, style: style.secondgroup }]

  const imgs = [{ id: 0, value: aphoto },
  { id: 1, value: photoo, },
  { id: 2, value: dphoto, }]
  const [sliderData, setSliderData] = useState(imgs[0])
  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  }

  return (
    <>
      <section class='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto'>
        <div>
          <div class='flex' >
            <div class=' col-xs-1 col-md-6'>
              <div class="grid gap-4 p-5 me-3 ">
                <div  >
                  <img class="h-auto max-w-full rounded-lg" src={sliderData.value} alt="1" />
                </div>
                <div >
                  <div class="grid grid-cols-3 gap-4"  >
                    {imgs.map((data, i) =>
                      <img class="h-auto max-w-full rounded-lg" key={data.id}
                        src={data.value}
                        onClick={() => handleClick(i)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div class=' col-xs-1  col-md-6'>

              <div className='flex justify-between py-3'>
                <div className='py-4 '>
                  <h1 class="font-bold text-2xl md:text-3xl text-slate-900 py-3">Apartment for sale in Badya
                    with 2 bedrooms in 6th of October City by Palm Hills Developments</h1>
                  <div class="my-3">
                    <FontAwesomeIcon className='px-3' icon={faLocationDot} />
                    <span class="text-md text-slate-700">Badya , 6th of October City, Egypt</span>
                  </div>
                  <h6 class="font-bold text-xl text-slate-900">EGP 1,537,000</h6>
                </div>

                <div className='flex justify-between align-items-center py-5' >
                  <a className='p-3'>
                    <FontAwesomeIcon icon={faHeart} />
                  </a>
                  <a className='p-3'>
                    <FontAwesomeIcon icon={faShareNodes} style={{ color: "#080808", }} className='pe-2' />
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className='py-3'>
            <h1 class="font-bold text-xl text-slate-900  py-2">Description</h1>
            <div class=" my-5 text-lg md:text-xl text-slate-900"
            >For sale, the last villa, with installments over 8 years, in Hyde Park Compound, on 90th Street, next to AUC

              Land area: 700 m

              Building area: 537 m

              Down payment of 6,500,000 and installments over 8 years without interest

              For reservations and inquiries, WhatsApp or call 010200201</div>
          </div>

          <div className="pb-3">
            <h2 class="font-bold text-xl text-slate-900  py-2">Property Information</h2>
            <div class='grid grid-cols-1 text-lg md:grid-cols-2 my-5'>
              <ul >
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faCity} />
                  <span class="pe-5 font-bold">Type:</span>
                  <span>Apartment</span> </li>
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faBed} />
                  <span class="pe-5 font-bold">Bedrooms:</span>
                  <span>4</span></li>
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faHouseCircleCheck} />
                  <span class="pe-5 font-bold">Purpose:</span>
                  <span>For Sale</span> </li>
                <li className='flex  py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faStreetView} />
                  <span class="pe-5 font-bold">View:</span>
                  <span>Main Street</span></li>
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faCircleCheck} />
                  <span class="pe-5 font-bold">Finish Type:</span>
                  <span>Extra super lux</span></li>
              </ul>

              <ul>
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faPerson} />
                  <span class="pe-5 font-bold">OwnershipPrimary:</span>
                  <span>Primary</span> </li>
                <li className='flex  py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faBath} />
                  <span class="pe-5 font-bold">Bathrooms:</span>
                  <span>25</span></li>
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faMaximize} />
                  <span class="pe-5 font-bold">Property size:</span>
                  <span>194</span></li>
                <li className='flex  py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faTreeCity} />
                  <span class="pe-5 font-bold">Floor:</span>
                  <span>7</span></li>
                <li className='flex py-3' >
                  <FontAwesomeIcon className={style.iconscolor} icon={faSackDollar} />
                  <span class="pe-5 font-bold">Payment Method:</span>
                  <span>Cash or Installments</span></li>
              </ul>
            </div>
          </div>

          <div className="pb-3">
            <h2 class="font-bold text-xl text-slate-900  py-2 ">Features / Amenitie</h2>
            <div className='text-lg font-bold grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-5'>
              <div className={style.cardcolor}>
                <FontAwesomeIcon icon={faWater} className={style.iconfeature} />
                Water Meter</div>
              <div className={style.cardcolor}>
                <FontAwesomeIcon icon={faBolt} className={style.iconfeature} /> Electricity Meter</div>
              <div className={style.cardcolor}>
                <FontAwesomeIcon icon={faSquareParking} className={style.iconfeature} /> Covered parking</div>
              <div className={style.cardcolor}>
                <FontAwesomeIcon icon={faBuilding} className={style.iconfeature} />Balcony or Terrace</div>
              <div className={style.cardcolor}>
                <FontAwesomeIcon icon={faElevator} className={style.iconfeature} />Elevators </div>
              <div className={style.cardcolor}>
                <FontAwesomeIcon icon={faShieldHalved} className={style.iconfeature} /> Security Staff</div>
            </div></div>

          <div class=' pb-2 mb-5 ' >
            <h2 class="font-bold text-xl text-slate-900 py-2"> Payment Plans</h2>
            <div class='grid grid-cols-1 md:grid-cols-2 text-center' >
              <p class="text-sm text-slate-900 my-5" className={style.loancolor} >
                <span >
                  <span class="font-bold" >EGP8,897 per month</span></span></p>
              <p className={style.loancolor}>
                <span class='text-lg'> TOTAL LOAN AMOUNT : </span>
                <span class="font-bold ">EGP 2,669,133</span>
              </p>
            </div>
          </div>
        </div >
      </section >
    </>)
}






export default Details



