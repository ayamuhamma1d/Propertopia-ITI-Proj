import React from "react";
import "./services.css";
import dphoto from "../../../src/assets/img/Maintenance1/1 (2).jpg";
import photosellrent from "../../../src/assets/img/Maintenance1/1 (12).jpg";
import photo3d from "../../../src/assets/img/REODECOR7.jpg";
import { Link } from "react-router-dom";
const paragraph = [
  "Uncover Your Oasis: Immerse Yourself in a Visual Journey to Your Ideal Home. Unlock Unparalleled Properties, Tailored for ", "Revitalize Your Space: Elevate Living with Our Exclusive Maintenance Magic. From Top-Notch Upkeep to Seamless Repairs .", " Revolutionize Your Showcase: Step into the Future with Our State-of-the-Art 3D Services. Immerse Your Audience in Captivating Virtual Tours "
]
const Services = () => {
  return (
    <>
      <div className="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10 text-center">
        <h5 className="font-bold text-3xl font-serif capitalize mb-10 text-center">Services</h5>        <div className="flex  gap-10  justify-center items-center">
          <div className="flex  gap-10  justify-center items-center services_cards ">
            <div className="w-full max-w-sm font-serif bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative ">
                <img src={photosellrent} id="serv_images" />
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between mb-3 pt-3"></div>
                <div>
                  <h6 className="font-bold text-2xl text-slate-900 font-serif capitalize">
                    Buy or rent
                  </h6>
                  <p className="my-8 px-4  leading-5 font-serif text-sm text-slate-700 services_paragraph">
                    {paragraph[0].split(' ').slice(0, 19).join(' ')}
                  </p>
                  <div>
                    <Link
                      to="/service"
                      className="inline-flex mb-5 hover:bg-beige hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm font-serif bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative ">
                <img src={dphoto}  id="serv_images" />
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between mb-3 pt-3"></div>
                <div>
                  <h6 className="font-bold text-2xl text-slate-900 font-serif capitalize">
                    Maintenance
                  </h6>
                  <p className="my-8  px-2 leading-5 text-sm font-serif text-slate-700 services_paragraph">
                    {paragraph[1].split(' ').slice(0, 19).join(' ')}
                  </p>
                  <div>
                    <Link
                      to="/service"
                      className="inline-flex mb-5 hover:bg-beige font-serif hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm font-serif bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="relative ">
                <img src={photo3d} id="serv_images"/>
              </div>
              <div className="px-5 pb-5">
                <div className="flex items-center justify-between mb-3 pt-3"></div>
                <div>
                  <h6 className="font-bold text-2xl text-slate-900 font-serif capitalize">
                    3D Model</h6>
                  <p className="my-8  px-2 leading-5 text-sm font-serif  text-slate-700 services_paragraph">
                    {paragraph[2].split(' ').slice(0, 19).join(' ')}
                  </p>
                  <div>
                    <Link
                      to="/service"
                      className="inline-flex mb-5 hover:bg-beige font-serif hover:text-white items-center px-3 py-2 text-sm font-medium text-center text-black service__button__background__color"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;

