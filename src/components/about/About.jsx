import React from "react";
import styles from './about.module.css';
import House from "../../assets/img/18.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-10 w-full font-serif sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
      <div className={`${styles.Continer} flex mb-20 items-center`}>
      <div className={ `${styles.BgContent} relative  w-1/2 pt-40 pb-40 mb-10 ps-7 `}>
        <h2 className="text-2xl capitalize font-bold  font-serif text-beige  mb-5 text-left"> A Journey Ideal Real Estate Realm</h2>
        <h3 className="text-lg mb-3 font-bold  ">Propertopia: Your Oasis, Your Space, Anywhere!</h3>
        <p className="text-sm lg:w-5/6  mb-8 font-serif ">
        Welcome to Your Real Estate Sanctuary! Elevate Your Journey with Our Comprehensive Services: Buy, Sell, Rent, and Maintain with Ease. Immerse Yourself in a Virtual Realty Adventure – Experience Your Future Home Through Stunning 3D Models. Uncover Seamless Scheduling and Availability Insights with Our Intelligent AI Chat Service, Your Personal Real Estate Concierge. Your Dream Space Awaits – Where Every Detail Matters, and Your Satisfaction is Our Commitment!
        </p>
        <div className={styles.BtnContainer}>
        <Link to='/units' className={` bg-beige  p-3 mt-6 items-center`}>
          <span className="text-white font-[Poppins]">View Our Properties</span>
        </Link>

        </div>
        <img className={`${styles.imgAbsoule} absolute h-3/4 w-3/4 `} src={House} alt="" />
      
      </div>
   
      </div>
     
    </div>
  );
};

export default About;
