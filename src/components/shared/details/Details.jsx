import React from 'react';
import photoo from './../../../assets/img/Maintenance/gettyimages-1268557129-612x612.jpg'

// import photoo from './../../../assets/img/beace5158805561.6392196298760.jpg';
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
const Details = () => {
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
      <section className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto'>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch" >
            <div className="grid gap-4 p-5 me-3 ">
              <div  >
                <img clasNames="h-auto max-w-full rounded-lg img" src={sliderData.value} alt="1" />
              </div>
              <div >
                <div className="grid grid-cols-3 gap-4 cursor-pointer"  >
                  {imgs.map((data, i) =>
                    <img className="h-auto max-w-full rounded-lg img" key={data.id}
                      src={data.value}
                      onClick={() => handleClick(i)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div >
              <div className='flex justify-between items-center'>
                <div className=''>
                  <h2 className="font-bold text-2xl md:text-3xl text-slate-950 font-[Poppins] py-3">Apartment for sale in Badya
                    with 2 bedrooms in 6th of October City by Palm Hills Developments</h2>
                  <div className="my-5">
                    <FontAwesomeIcon className='me-3 text-beige' icon={faLocationDot} />
                    <span className="text-md text-slate-700">Badya , 6th of October City, Egypt</span>
                  </div>
                  <h6 className=" text-xl text-slate-900"><span className="font-bold text-xl text-beige">EGP </span> 1,537,000</h6>
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

              <div >
                <h2 className="font-bold text-xl text-beige pt-3">Description :</h2>
                <p className=" my-5  text-slate-700"
                >For sale, the last villa, with installments over 8 years, in Hyde Park Compound, on 90th Street, next to AUC

                  Land area: 700 m

                  Building area: 537 m

                  Down payment of 6,500,000 and installments over 8 years without interest

                  For reservations and inquiries, WhatsApp or call 010200201</p>
              </div>
              <div class='grid grid-cols-1 text-lg md:grid-cols-2 font-[Poppins]'>
                <ul >
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faCity} />
                    <span class="pe-2 ">Type:</span>
                    <span className="text-gray-600">Apartment</span> </li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faBed} />
                    <span class="pe-2 ">Bedrooms:</span>
                    <span className="text-gray-600">4</span></li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faHouseCircleCheck} />
                    <span class="pe-2 ">Purpose:</span>
                    <span className="text-gray-600">For Sale</span> </li>
                  <li className='flex  py-1' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faStreetView} />
                    <span class="pe-2 ">View:</span>
                    <span className="text-gray-600">Main Street</span></li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faCircleCheck} />
                    <span class="pe-2 ">Finish Type:</span>
                    <span className="text-gray-600">Extra super lux</span></li>
                </ul>

                <ul>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faPerson} />
                    <span class="pe-2 ">Ownership Primary: </span>
                    <span className="text-gray-600">Primary</span> </li>
                  <li className='flex  py-1' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faBath} />
                    <span class="pe-2 ">Bathrooms: </span>
                    <span className="text-gray-600">25</span></li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faMaximize} />
                    <span class="pe-2 ">Property size: </span>
                    <span className="text-gray-600">194</span></li>
                  <li className='flex py-1 items-center' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faTreeCity} />
                    <span class="pe-2 ">Floor: </span>
                    <span className="text-gray-600">7</span></li>
                  <li className='flex py-1 items-center ' >
                    <FontAwesomeIcon className={`${style.iconscolor} me-2 text-beige`} icon={faSackDollar} />
                    <span class=" pe-2 ">Payment : </span>
                    <span className="text-gray-600">Cash or Installments</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pb-3 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto font-[Poppins] ">
            <h2 class=" font-[Poppins] text-left font-bold text-2xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto  py-2 ">Features </h2>
            <div className='text-lg font-bold font-bold grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-3 ms-5 '>
              <div className=" bg-beige1 me-3 p-2 text-center mb-3 ">
                <FontAwesomeIcon icon={faWater} className="text-beige me-2  bg-beige1" />
                Water Meter</div>
              <div className=" bg-beige1 me-3 p-2 text-center mb-3 ">
                <FontAwesomeIcon icon={faBolt} className="text-beige me-2  bg-beige1" /> Electricity Meter</div>
              <div className=" bg-beige1 me-3 p-2 text-center mb-3 ">
                <FontAwesomeIcon icon={faSquareParking} className="text-beige me-2  bg-beige1" /> Covered parking</div>
              <div className=" bg-beige1 me-3 p-2 text-center mb-3 ">
                <FontAwesomeIcon icon={faBuilding} className="text-beige me-2  bg-beige1" />Balcony or Terrace</div>
              <div className=" bg-beige1 me-3 p-2 text-center mb-3 ">
                <FontAwesomeIcon icon={faElevator} className="text-beige me-2  bg-beige1" />Elevators </div>
              <div className=" bg-beige1 me-3 p-2 text-center mb-3 ">
                <FontAwesomeIcon icon={faShieldHalved} className="text-beige me-2  bg-beige1" /> Security Staff</div>
            </div></div>

          <div class=' pb-2 mb-5 ' >
            <h2 class="font-[Poppins]  font-bold text-left text-2xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto  "> Payment Plans</h2>
            <div class='grid grid-cols-1 md:grid-cols-2 text-center' >
              <p class="text-sm text-slate-900 my-5" className={style.loancolor} >
                <span >
                  <span class="font-bold font-[Poppins] text-lg" >EGP 8,897 per month</span></span></p>
              <p className={style.loancolor}>
                <span class='text-lg font-bold font-[Poppins]'> TOTAL LOAN AMOUNT : </span>
                <span class=" ">EGP 2,669,133</span>
              </p>
            </div>
          </div>
        </div >
      </section >
    </>)
}


export default Details



