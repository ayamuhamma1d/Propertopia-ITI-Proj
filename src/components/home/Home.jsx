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
  return (
    <>
      <Hero />
      <div className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10'>
        <h5 className="font-bold text-3xl font-serif capitalize mt-10 pt-5 text-center">Units For Sale</h5>
      </div>
      <div className={` flex  justify-center items-center ${style.card}`}>
        {salesData.slice(0, 3).map(card => (
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