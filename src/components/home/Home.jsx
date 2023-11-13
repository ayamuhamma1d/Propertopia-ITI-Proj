import React from "react";
import Contact from "./../contact";
import Maintenance from "./Maintenance";
import Services from "./Services";
import Hero from "./Hero";
import Card from "../shared/card/Card";
import { data } from './../auth/firebase/Firebase' 
const Home = () => {
  const salesData=data[0];

  return (
    <>
      <Hero />
      <div className=" flex flex-wrap justify-center">
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
    </>
  );
};
export default Home;