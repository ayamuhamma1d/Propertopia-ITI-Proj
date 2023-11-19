
import React from 'react'

import After1 from "../../../assets/img/Maintenancecomponent/after1.png";
import Before1 from "../../../assets/img/Maintenancecomponent/before1.png";
import video from "../../../assets/video/Modern Bedroom In A Luxury Villa Stock Video - Download Video Clip Now - Real Estate, Home Interior, Residential Building - iStock.mp4";
import "./finishes.css"

const features = [
  { name: "Dimensions", description: "6.25 x 3.55 x 1.15" },
  {
    name: "Rooms",
    description:
      "Walls and ceilings: The walls and ceilings are fully constructed, painted or wallpaper drywall orFlooring: The room has a finished floor surface,Lighting: Electrical wiring and light fixtures are installedWindows and doors: Windows are installed, allowing natural light and ventilation. ",
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
      "Cabinetry: The kitchen has installed cabinets, providing storage space for cookware, utensils, and food items. A kitchen sink is installed and connected to the plumbing system, Lighting: Adequate lighting is present in the kitchen, including overhead ",
  },
  {
    name: "balcony",
    description:
      " finished balcony typically has a flooring material that is suitable for outdoor use. Balconies are usually enclosed by railings for safety purposes. Balconies may have appropriate lighting fixtures to illuminate the space during the evening or nighttime.",
  },
];

const Finishes = () => {
  return (


    <>
     <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unit finishing
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
          <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:gap-2 lg:gap-2">
            <div className="item">
              <video width="750" height="500" autoPlay controls muted>
                <source src={video} type="video/mp4"  />
              </video>
            </div>
            <div className="item2">
              <div class="finished_background">
                <div class="finished_gallery">
                  <div class="finished_card">
                    <figure>
                      <img src={After1} />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={Before1}  />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={After1}  />
                    </figure>
                  </div>
                </div>
                <div class="finished_gallery">
                  <div class="finished_card">
                    <figure>
                      <img src={After1} />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={Before1} />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={After1}  />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        
          <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:gap-2 lg:gap-2">
            <div className="item">
              <video width="750" height="500" controls autoPlay muted>
                <source src={video} type="video/mp4"  />
              </video>
            </div>
            <div className="item2">
              <div class="finished_background">
                <div class="finished_gallery">
                  <div class="finished_card">
                    <figure>
                      <img src={After1}  />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={After1}  />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={Before1}  />
                    </figure>
                  </div>
                </div>
                <div class="finished_gallery">
                  <div class="finished_card">
                    <figure>
                      <img src={Before1}  />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={After1}  />
                    </figure>
                  </div>
                  <div class="finished_card">
                    <figure>
                      <img src={Before1} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unit2 finishing
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

  )
}

export default Finishes