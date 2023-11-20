import React from "react";
import "./hero.css";
import logo from "./../../assets/img/logo.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="px-3 py-4  lg:py-10 bg-[#eae0da] mb-10 font-[Poppins] ">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5  mx-auto">
        <div className="text-start">
          <h1 className="text-3xl font-bold   capitalize cloud-text cloud-title  text-lg-start hero__title tracking-tight text-gray-900 sm:text-5xl text-sm-center  ">
            Your Perfect Property, Every Offer Shines!
          </h1>
          <p className="text-lg  px-2 ">
            Illuminate Your Home Search with Unrivaled Brilliance.
          </p>
          <p className="mt-6 font-serif leading-8 text-gray-600  px-8">
            Discover the home of your dreams with confidence, guided by our
            comprehensive features that ensure you receive the best offers
            available. Uncover a world of possibilities and let us redefine the
            way you find and acquire your ideal property.{" "}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/units"
              className=" Get_Started rounded-md font-serif px-10 py-3 bg-beige text-lg  text-black shadow-sm   hover:bg-black   hover:text-white  "
            >
              Get Start
            </Link>
          </div>
        </div>
        <div className="order-2 lg:order-1">
          <img src={logo} className="w-[100%] h-100 lg:py-8 sm:py-4 " />
        </div>
      </div>
    </section>
  );
};
export default Hero;
