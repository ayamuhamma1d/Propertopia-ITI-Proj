import React from "react";
import Contact from "./../contact";
import Maintenance from "./Maintenance";
import Services from "./Services";
import Hero from "./Hero";
import Card from "../shared/card/Card";
import Filter from "../shared/filter/Filter";
const Home = () => {
  return (
    <>
      <Hero />
      <Filter />
      <Card/>
      <Services />
      <Maintenance />
      <Contact />
    </>
  );
};
export default Home;