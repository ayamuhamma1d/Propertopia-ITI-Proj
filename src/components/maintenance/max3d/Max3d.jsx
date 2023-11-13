import React from 'react'
import kitchen1 from "../../../assets/img/kitchen/kitchen1.jpg";
import kitchen2 from "../../../assets/img/kitchen/kitchen2.jpg";
import room1 from "../../../assets/img/room/room1.png";
import room2 from "../../../assets/img/room/room2.png";
import room3 from "../../../assets/img/room/room3.png";
import room4 from "../../../assets/img/room/room4.png";
import room5 from "../../../assets/img/room/room5.png";

import "./max3d.css"

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
const Max3d = () => {
  return (

    <>
    <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            kitchen
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
            <iframe src="https://planner5d.com/v?key=9665b919d1a40d6bbe578ae8ea26dad5&viewMode=3d" className="kitchen" allowfullscreen></iframe>
            </div>
            <div className="item2">
              <div class="Max_background">
                <div class="Max_gallery">
                  <div class="Max_card">
                    <figure>
                      <img src={kitchen1} id='max_photo' />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={kitchen2}  />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                    <img src={kitchen1}  />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                    <img src={kitchen2}/>
                    </figure>
                  </div>
                </div>
                <div class="Max_gallery">
                  <div class="Max_card">
                    <figure>
                    <img src={kitchen1}  />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                    <img src={kitchen2} />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                    <img src={kitchen1}/>
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                    <img src={kitchen2}  />
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
              
            <iframe src="https://planner5d.com/v?key=bf082a8e7f6e5c05c6028c121ed7d614&viewMode=2d"  className="room" allowfullscreen></iframe>
            </div>
            <div className="item2">
              <div class="Max_background">
                <div class="Max_gallery">
                  <div class="Max_card">
                    <figure>
                      <img src={room5} />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={room5}  />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={room5}  />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={room5}  />
                    </figure>
                  </div>
                </div>
                <div class="Max_gallery">
                  <div class="Max_card">
                    <figure>
                      <img src={room5} />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={room5} alt="Forest mountains" />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={room5}  />
                    </figure>
                  </div>
                  <div class="Max_card">
                    <figure>
                      <img src={room5} />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Room
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

export default Max3d