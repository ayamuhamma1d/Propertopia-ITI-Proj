import React from "react";
import Contact from "./../contact";
import Maintenance from "./Maintenance";
import Services from "./Services";
import Hero from "./Hero";


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Maintenance />
      <Contact />
    </>
  );
};
export default Home;