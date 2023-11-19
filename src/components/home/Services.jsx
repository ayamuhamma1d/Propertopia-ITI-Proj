import React from 'react';
import './services.css';
import dphoto from '../../../src/assets/img/Maintenance1/1 (2).jpg';
import photosellrent from '../../../src/assets/img/Maintenance1/1 (12).jpg';
import photo3d from '../../../src/assets/img/pngegg.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section>
        <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10 text-center">
          <h2 className="font-bold text-3xl font-[Poppins] mb-10">Services</h2>
          <div className="flex flex-col gap-5 md:flex-row md:space-x-5 md:space-y-0 space-x-5">
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={photosellrent} alt="1" className="" />
              <h5 className="font-bold text-lg text-slate-900 ">Buy / rent your home</h5>
              <p className="my-8 px-4  leading-5 text-sm text-slate-700">
              Discover your ideal home with our immersive photo experience . Explore unique properties you won't find anywhere else, whether you're looking to rent for flexibility or buy for lasting ownership. Your dream home awaits—explore, choose, and make it yours.
              </p>
              <div>
              <Link to="/service"
                 
                  className="inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={dphoto} alt="1" className='' />
              <h5 className="font-bold text-lg text-slate-900">Maintenance </h5>
              <p className="my-8 px-4  leading-5 text-sm text-sm text-slate-700">
              Transform your living with our dedicated maintenance services. Our team offers top-notch upkeep, repairs, and enhancements for a worry-free lifestyle. Enjoy peace of mind with our exclusive maintenance solutions, ensuring your home is meticulously cared for.
             
              </p>
              <div>
                <Link to="/service"
                 
                  className="inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={photo3d} alt="1" className="w-full" />
              <h5 className="font-bold text-lg text-slate-900">3D</h5>
              <p className="my-8 px-4 leading-5 text-sm text-sm text-slate-700">
              Transform your property showcase with our cutting-edge 3D services. Our expert team creates immersive virtual tours that go beyond static images, captivating potential buyers or renters. Elevate your listings and stand out in the market with our exclusive 3D offerings                   </p>
              <div>
                <Link to="/service"
                 
                  className="inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;