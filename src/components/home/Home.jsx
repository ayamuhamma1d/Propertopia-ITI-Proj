import React from "react";
import Contact from "./../contact";
import Maintenance from "./Maintenance";
import Services from "./Services";
import Hero from "./Hero";
import Card from "../shared/card/Card";
const Home = () => {
  const cardData = [
    { id: 1, title: 'Villa', price: '$5000', bedNum: '3', bathNum: '4', area: '600', location: 'Alexandria', type: 'For Sale' },
    { id: 2, title: 'Apartment', price: '$3990', bedNum: '2', bathNum: '1', area: '250', location: 'Alexandria', type: 'For Rent' },
    { id: 3, title: 'Villa', price: '$4990', bedNum: '6', bathNum: '4', area: '600', location: 'NorthCoast', type: 'For Sale' },
  ];
  return (
    <>
      <Hero />
      <div className=" flex flex-wrap justify-center">
        {cardData.slice(0, 3).map(card => (
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