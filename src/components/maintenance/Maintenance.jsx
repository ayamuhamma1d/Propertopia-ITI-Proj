import React from "react";
import Before1 from "../../assets/img/Maintenancecomponent/before1.png";
import Before2 from "../../assets/img/Maintenancecomponent/before2.png";
import After1 from "../../assets/img/Maintenancecomponent/after1.png";
import After2 from "../../assets/img/Maintenancecomponent/after2.png";
import model1 from "../../assets/img/Maintenancecomponent/1.png";
import model2 from "../../assets/img/Maintenancecomponent/2.png";
import model3 from "../../assets/img/Maintenancecomponent/3.png";
import model4 from "../../assets/img/Maintenancecomponent/4.png";
import model5 from "../../assets/img/Maintenancecomponent/5.png";
import model6 from "../../assets/img/Maintenancecomponent/6.png";
import "./maintenance.css";

const Maintenance = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5">
          <h2 className="text-3xl font-bold text-start text-gray-900">
            Maintained
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            <div className="after_before_bg bg-[#eae0da]">
              <div className="after_before  p-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8  ">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={Before1}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      Before
                    </h3>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={After1}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      After
                    </h3>
                  </div>
                </div>
              </div>
              <p className="px-5 pb-3 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur neque voluptas quam ipsam itaque fuga eos animi
                quidem reprehenderit sequi omnis, enim corporis corrupti totam
                fugit. Illum sunt magnam vero?
              </p>
            </div>
            <div className="after_before_bg bg-[#eae0da]">
              <div className="after_before  p-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8  ">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={Before2}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      Before
                    </h3>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={After2}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      After
                    </h3>
                  </div>
                </div>
              </div>
              <p className="px-5 pb-3 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur neque voluptas quam ipsam itaque fuga eos animi
                quidem reprehenderit sequi omnis, enim corporis corrupti totam
                fugit. Illum sunt magnam vero?
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            <div className="after_before_bg bg-[#eae0da]">
              <div className="after_before  p-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8  ">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={Before1}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      Before
                    </h3>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={After1}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      After
                    </h3>
                  </div>
                </div>
              </div>
              <p className="px-5 pb-3 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur neque voluptas quam ipsam itaque fuga eos animi
                quidem reprehenderit sequi omnis, enim corporis corrupti totam
                fugit. Illum sunt magnam vero?
              </p>
            </div>
            <div className="after_before_bg bg-[#eae0da]">
              <div className="after_before  p-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8  ">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={Before2}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      Before
                    </h3>
                  </div>
                </div>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none cursor-pointer lg:h-80">
                    <img
                      src={After2}
                      className="h-full w-full object-cover object-center mt-0  lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <h3 className="text-lg  text-center	w-100 text-gray-700">
                      After
                    </h3>
                  </div>
                </div>
              </div>
              <p className="px-5 pb-3 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur neque voluptas quam ipsam itaque fuga eos animi
                quidem reprehenderit sequi omnis, enim corporis corrupti totam
                fugit. Illum sunt magnam vero?
              </p>
            </div>
          </div>
          <div className="maintained_Button  ">
            <button
              type="button"
              className="rounded-md bg-[#eae0da] px-2.5 py-1.5 mt-16 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              See more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5">
          <h2 className="text-3xl font-bold text-start text-gray-900">
            3D Design
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-1">
            <div className="iframe_parent p-4">
              <iframe
                src="https://planner5d.com/v?key=21c4cb615789a834c3e94a863141bc83&viewMode=2d"
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
              className="rounded-md bg-[#eae0da] px-2.5 py-1.5 mt-16 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Maintenance;
