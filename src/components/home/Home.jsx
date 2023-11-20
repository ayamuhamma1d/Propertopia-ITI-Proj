import React from "react";
import Contact from "./../contact";
import Maintenance from "./Maintenance";
import Services from "./Services";
import Hero from "./Hero";
import Card from "../shared/card/Card";
import Feedback from "../shared/feedback/feedback";
import { data } from './../auth/firebase/Firebase'
import style from "./home.module.css"
const Home = () => {
  const salesData = data[0];
  const ranetData = data[1];
  return (
    <>
      <Hero />
      <div className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10'>
        <h5 className="font-bold text-3xl font-serif capitalize mt-10 pt-5 text-center">Recently Units </h5>
      </div>
      <div className={` flex  justify-center items-center ${style.card}`}>
        {salesData.slice(0, 1).map(card => (
          <div key={card.id} className="mb-10">
            <Card
              {...card}
            />
          </div>
        ))}

 {ranetData.slice(1,2).map(card => (
          <div key={card.id} className="mb-10">
            <Card
              {...card}
            />
          </div>
        ))}
         {salesData.slice(2, 3).map(card => (
          <div key={card.id} className="mb-10">
            <Card
              {...card}
            />
          </div>
        ))} 

      </div>
     
      <Services />
      <Maintenance />
      <div className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10'>
        <h5 className="font-bold text-3xl font-serif capitalize mt-10 pt-5 text-center">Clients Feedback</h5>
      </div>
      <Feedback />
      <Contact />
    </>
  );
};
export default Home;