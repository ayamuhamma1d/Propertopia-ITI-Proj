import React from 'react';
import './services.css';
import dphoto from '../../../src/assets/img/Maintenance1/1 (2).jpg';
import photosellrent from '../../../src/assets/img/Maintenance1/1 (12).jpg';
import photo3d from '../../../src/assets/img/3dservivephoto-removebg-preview.png';

const Services = () => {
  return (
    <>
      <section>
        <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10 text-center">
          <h2 className="font-bold text-3xl font-[Poppins] mb-10">Services</h2>
          <div className="flex flex-col gap-5 md:flex-row md:space-x-5 md:space-y-0 space-x-5">
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={photosellrent} alt="1" className="" />
              <h5 className="font-bold text-lg text-slate-900 ">Buy a home</h5>
              <p className="my-8 leading-5 text-sm text-slate-700">
                Find your place with an immersive photo experience and the most listings, including things you won’t find
                anywhere else
              </p>
              <div>
                <a
                  href="#"
                  className="service__button__background__color inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-3 text-sm font-medium text-center text-black"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={dphoto} alt="1" className='' />
              <h5 className="font-bold text-lg text-slate-900">Buy a home</h5>
              <p className="my-8 leading-5 text-sm text-sm text-slate-700">
                Find your place with an immersive photo experience and the most listings, including things you won’t find
                anywhere else
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={photo3d} alt="1" className="w-full" />
              <h5 className="font-bold text-lg text-slate-900">Buy a home</h5>
              <p className="my-8 leading-5 text-sm text-sm text-slate-700">
                Find your place with an immersive photo experience and the most listings, including things you won’t find
                anywhere else
              </p>
              <div>
                <a
                  href="#"
                  className="inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;