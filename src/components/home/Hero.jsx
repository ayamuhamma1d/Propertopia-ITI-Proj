import React from 'react';
import './hero.css';
import logo from './../../assets/img/logo.png';
const Hero = () => {
  return (
    <section className="px-3 py-4  lg:py-10 bg-[#eae0da] mb-10">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5  mx-auto">
      <div className="text-start">
      <h1 className="text-4xl font-bold cloud-text cloud-title  text-lg-start hero__title tracking-tight text-gray-900 sm:text-5xl text-sm-center  ">
          Real estate your online business
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 font-[Poppins] px-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
          lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
          fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md  px-3.5 py-2.5 bg-[#bca37f] text-sm font-[Poppins] text-black shadow-sm hover:bg-[#eae0da] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
        </div>
      </div>
      <div className="order-2 lg:order-1">
        <img
          src={logo}
          className="w-[100%] h-100 lg:py-8 sm:py-4 "
        />
      </div>
    </div>
  </section>
  );
};

export default Hero;