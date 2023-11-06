import React from "react";
import Contact from "./../contact";
import Maintenance from "./Maintenance";
import Services from "./Services";
import Hero from "./Hero";
import Card from "../shared/card/Card";
const Home = () => {
  return (
    <>

      <Hero />
      <Card/>
      <Services />
      <Maintenance />
      <Contact />
    </>
  );
};
export default Home;