import React from "react";
import After1 from "../../../assets/img/Maintenancecomponent/after1.png";
import Before1 from "../../../assets/img/Maintenancecomponent/before1.png";
import { data } from "../../auth/firebase/Firebase";
import video from "../../../assets/video/Modern Bedroom In A Luxury Villa Stock Video - Download Video Clip Now - Real Estate, Home Interior, Residential Building - iStock.mp4";
import "./max3d.css";
const features = [
  {
    name: "Rooms",
    description:
      "Walls and ceilings: The walls and ceilings are fully constructed, painted or wallpaper drywall orFlooring ",
  },
  {
    name: "Bathrooms",
    description:
      "Fixtures: Essential fixtures, such as sinks, toilets, showers, or bathtubs, are installed and connected to the plumbing system.",
  },
  {
    name: "Living Room",
    description:
      "Lighting: The salon has proper lighting fixtures, Windows and doors: Windows are installed, allowing natural light into the salon.  Baseboards, crown moldings, and other decorative or functional trim work are installed to add finishing details to the salon.",
  },
  {
    name: "Kitchen",
    description:
      "Cabinetry: The kitchen has installed cabinets, providing storage space for cookware, utensils, and food items. A kitchen sink is installed and connected to the plumbing system, Lighting: Adequate lighting is present in the kitchen ",
  },
];
const finishdata = data[0];
const Max3d = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl font-serif  grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kitchen finished
            </h2>
            <p className="mt-4 text-gray-500">
              In the heart of every home, the kitchen stands as a testament to
              the artistry of sustenance. Our approach to kitchen finishing
              transcends the conventional; it's a symphony of enhancement and
              maintenance that transforms cooking spaces into culinary
              sanctuaries. Through meticulous craftsmanship, we breathe new life
              into every countertop, every cabinet, and every corner, not just
              enhancing aesthetics but also ensuring longevity.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900 text-start">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500 text-start ">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:gap-2 lg:gap-2  ">
            <div className="item">
              <iframe
                src="https://planner5d.com/v?key=9665b919d1a40d6bbe578ae8ea26dad5&viewMode=3d"
                className="kitchen"
                allowfullscreen
              ></iframe>
            </div>
            <div className="item2">
              <div class="finesh_background">
                <div class="finesh_gallery">
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[3].images[2]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[7].images[2]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[5].images[3]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[0].images[3]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[9].images[3]} alt="Preview" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl   font-serif grid-cols-1 items-center gap-x-8 gap-y-1 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:gap-2 lg:gap-2">
            <div className="item">
              <iframe
                src="https://planner5d.com/v?key=bf082a8e7f6e5c05c6028c121ed7d614&viewMode=2d"
                className="room"
                allowfullscreen
              ></iframe>
            </div>
            <div className="item2">
              <div class="finesh_background">
                <div class="finesh_gallery">
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[1].images[1]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[8].images[0]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[7].images[0]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[6].images[0]} alt="Preview" />
                    </figure>
                  </div>
                  <div class="finesh_card">
                    <figure>
                      <img src={finishdata[2].images[1]} alt="Preview" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Bedroom finished
            </h2>
            <p className="mt-4 text-gray-500">
              This unit was on bricks and we started finishing it from start to
              finish in coordination with a decor company and design engineers.
              It was completely finished, and here are some finishing details.
              This unit was on bricks and we started finishing it from start to
              finish in coordination with a decor company and design engineers.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900 text-start">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500 text-start ">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Max3d;
