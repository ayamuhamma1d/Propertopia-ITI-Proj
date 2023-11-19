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
  const salesData=data[0];

  return (
    <>
      <Hero />
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
      <Contact />
      <Feedback />
    </>
  );
};
export default Home;