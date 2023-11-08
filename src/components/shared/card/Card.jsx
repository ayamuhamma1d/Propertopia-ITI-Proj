import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import CardImg from"../../../assets/img/12.jpg"
import CardImg1 from"../../../assets/img/13.jpg"
import CardImg2 from"../../../assets/img/14.jpg"
const Card = ({type,title}) => {
  console.log(type);
  return (
    <div className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto  mt-10'>
    <div className="flex  gap-10 flex-wrap  justify-center items-center">
    <div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='relative '>
          <a href="#">
            <img src={CardImg} alt="" />
          </a>
          <div className={`absolute top-2 left-3 bg-black p-2`}>
            <p className="text-white">{type}</p>
          </div>

        </div>
        <div class="px-5 pb-5">

          <div class="flex items-center justify-between mb-3 pt-3">
            <a href="#" class=" font-medium">{title}</a>
            <span class="text-xl font-bold  ">$599</span>
          </div>

          <div className='flex justify-between items-center border-b pb-2'>
            <div ><p><FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} className='me-2' />BedNum.</p></div>
            <div ><p><FontAwesomeIcon icon={faBath} style={{ color: "#000000", }} className='me-2'/>bathNum.</p></div>
            <div ><p><FontAwesomeIcon icon={faHouse} className='me-2'/>area</p></div>
          </div>
          <div class="flex items-center justify-between mt-2.5 mb-5">

            <div><p><FontAwesomeIcon className='pr-1' icon={faLocationDot} />location</p></div>

            <div >
              <a href="" className='pr-3'>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faShareNodes} style={{ color: "#080808", }} className='pe-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    <div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='relative '>
          <a href="#">
            <img src={CardImg1} alt="" />
          </a>
          <div className={`absolute top-2 left-3 bg-black p-2`}>
            <p className="text-white">{type}</p>
          </div>

        </div>
        <div class="px-5 pb-5">

          <div class="flex items-center justify-between mb-3 pt-3">
            <a href="#" class=" font-medium">Villa</a>
            <span class="text-xl font-bold  ">$599</span>
          </div>

          <div className='flex justify-between items-center border-b pb-2'>
            <div ><p><FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} className='me-2' />BedNum.</p></div>
            <div ><p><FontAwesomeIcon icon={faBath} style={{ color: "#000000", }} className='me-2'/>bathNum.</p></div>
            <div ><p><FontAwesomeIcon icon={faHouse} className='me-2'/>area</p></div>
          </div>
          <div class="flex items-center justify-between mt-2.5 mb-5">

            <div><p><FontAwesomeIcon className='pr-1' icon={faLocationDot} />location</p></div>

            <div >
              <a href="" className='pr-3'>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faShareNodes} style={{ color: "#080808", }} className='pe-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    <div class="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='relative '>
          <a href="#">
            <img src={CardImg2} alt="" />
          </a>
          <div className={`absolute top-2 left-3 bg-black p-2`}>
            <p className="text-white">{type}</p>
          </div>

        </div>
        <div class="px-5 pb-5">

          <div class="flex items-center justify-between mb-3 pt-3">
            <a href="#" class=" font-medium">Villa</a>
            <span class="text-xl font-bold  ">$599</span>
          </div>

          <div className='flex justify-between items-center border-b pb-2'>
            <div ><p><FontAwesomeIcon icon={faBed} style={{ color: "#000000", }} className='me-2' />BedNum.</p></div>
            <div ><p><FontAwesomeIcon icon={faBath} style={{ color: "#000000", }} className='me-2'/>bathNum.</p></div>
            <div ><p><FontAwesomeIcon icon={faHouse} className='me-2'/>area</p></div>
          </div>
          <div class="flex items-center justify-between mt-2.5 mb-5">

            <div><p><FontAwesomeIcon className='pr-1 ' icon={faLocationDot} />location</p></div>

            <div >
              <a href="" className='pr-3'>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faShareNodes} style={{ color: "#080808", }} className='pe-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  )
}

export default Card;