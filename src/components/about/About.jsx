import React from "react";
import styles from './about.module.css';
import House from "../../assets/img/18.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-10 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
      <div className={`${styles.Continer} flex mb-20`}>
      <div className={ `${styles.BgContent} relative  w-1/2  pl-20 pt-40 pb-40 mb-10 `}>
        <h5 className="text-xl  text-beige  mb-5 text-left">VIEW THE EXTRAORDINARY</h5>
        <h2 className="text-2xl mb-3 font-bold font-[Poppins] ">Homes in Alexandria</h2>
        <p className="text-sm lg:w-5/6 font-[Poppins] mb-8">
        Propertopia: Elevating the Alexandria real estate market with excellence! As a newcomer in the industry,
         we are driven by passion and dedicated to delivering outstanding results. Our mission is to redefine
          the experience of buying, selling, and investing in properties, ensuring that every step of your 
          real estate journey is extraordinary. With a team of experts, we bring unparalleled knowledge,
           personalized service, and a relentless commitment to your satisfaction. Trust Propertopia as your
         reliable partner in achieving your real estate dreams, not only in Alexandria but also beyond!
        </p>
        <div className={styles.BtnContainer}>
        <Link className={` bg-beige  p-3 mt-6 items-center`}>
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
