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
        <h5 className="font-bold text-3xl font-serif capitalize mb-10 text-center">Services</h5>
          <div className="flex flex-col gap-5 md:flex-row md:space-x-5 md:space-y-0 space-x-5 justify-center items-center">
            <div className="md:w-1/3 flex flex-col items-center  space-y-4 rounded-lg border border-slate-200">
              <img src={photosellrent} alt="1" className="" />
              <h3 className="font-bold text-xl text-slate-900 font-serif capitalize"> Own or Rent </h3>
              <p className="my-8 px-4  leading-5 font-serif text-sm text-slate-700">
              Uncover Your Oasis: Immerse Yourself in a Visual Journey to Your Ideal Home. Unlock Unparalleled Properties, Tailored for Renting Flexibility or Forever Ownership.</p>
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
              <h3 className="font-bold text-xl text-slate-900 font-serif capitalize">Maintenance </h3>
              <p className="my-8  px-2 leading-5 text-sm font-serif text-slate-700">
              Revitalize Your Space: Elevate Living with Our Exclusive Maintenance Magic. From Top-Notch Upkeep to Seamless Repairs .
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
              <h3 className="font-bold text-xl text-slate-900 font-serif capitalize"> 3D Module</h3>
              <p className="my-8  px-2 leading-5 text-sm font-serif  text-slate-700">
              Revolutionize Your Showcase: Step into the Future with Our State-of-the-Art 3D Services. Immerse Your Audience in Captivating Virtual Tours .  </p>
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