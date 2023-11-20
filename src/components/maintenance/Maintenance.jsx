import React from "react";
import { Link } from "react-router-dom";
import model1 from "../../assets/img/Maintenancecomponent/1.png";
import model2 from "../../assets/img/Maintenancecomponent/2.png";
import model3 from "../../assets/img/Maintenancecomponent/3.png";
import model4 from "../../assets/img/Maintenancecomponent/4.png";
import model5 from "../../assets/img/Maintenancecomponent/5.png";
import model6 from "../../assets/img/Maintenancecomponent/6.png";
import { data } from "../auth/firebase/Firebase";
import "./maintenance.css";

const Maintenance = () => {

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-16 lg:px-8 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5">
          <h5 className=" text-start text-gray-900 capitalize  font-serif  text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
            Maintained Units
          </h5>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 font-serif  sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            {data[2].slice(0,6).map((item) => (
            <div className="after_before_bg bg-[#eae0da]">
              <div className=" p-4  gap-x-6 gap-y-10 xl:gap-x-8  ">
                <div className="group relative befor_after ">
                  <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={item.img_url
                      }
                      className="h-full  w-full object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                </div>
              </div>
              <p className="px-5 pb-3 text-start font-serif ">
                {item.description}
              </p>
            </div>
            ))}
          </div>
          <div className="maintained_Button  ">
            <button
              type="button"
              className="rounded-md bg-[#eae0da] font-serif px-2.5 py-3 border-0 hover:bg-beige hover:text-white mt-16 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 "
            >
              <Link to="/maintenance/finishes" className="Link font-serif   px-2 py-9"> See more</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-16 lg:px-8 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5">
        <h5 className=" text-start text-gray-900 capitalize  font-serif  text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
            3D Design
          </h5>
          <div className="mt-2 grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-1">
            <div className="iframe_parent p-4">
              <iframe
                src="https://planner5d.com/v?key=21c4cb615789a834c3e94a863141bc83&viewMode=3d"
                className="iframe"
                allowfullscreen
              ></iframe>
            </div>
            <div className="after_before  p-4 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-2  ">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                  <img
                    src={model1}
                    className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                  <img
                    src={model2}
                    className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                  <img
                    src={model3}
                    className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                  <img
                    src={model4}
                    className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                  <img
                    src={model5}
                    className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                  <img
                    src={model6}
                    className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="maintained_Button ">
            <button
              type="button"
              className="rounded-md font-serif  bg-[#eae0da] px-2.5 py-3 border-0 hover:bg-beige hover:text-white mt-16 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 mb-10 "
            >
              <Link to="/maintenance/3d-max" className="Link"> See more</Link>
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};
export default Maintenance;

