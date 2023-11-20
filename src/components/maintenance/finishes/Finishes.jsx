
import React from 'react'

import After1 from "../../../assets/img/Maintenancecomponent/after1.png";
import Before1 from "../../../assets/img/Maintenancecomponent/before1.png";
import { data } from "../../auth/firebase/Firebase";
import video1 from "../../../assets/video/Modern Bedroom In A Luxury Villa Stock Video - Download Video Clip Now - Real Estate, Home Interior, Residential Building - iStock.mp4";
import video2 from "../../../assets/video/real.mp4";
import "./finishes.css"

const features = [
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

];

const finishdata = data[0]


const Finishes = () => {
  return (


    <>
     <div className="bg-white">
        <div className="mx-auto grid max-w-2xl font-serif  grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold font-serif tracking-tight text-gray-900 sm:text-4xl">
             Villa in North Coast
            </h2>
            <p className="mt-4 text-gray-500">
            Rafting Dreams into Reality: This unit, once a mere assembly of bricks, underwent a metamorphosis under our care. We embarked on a journey, hand in hand with a distinguished decor company and visionary design engineers, breathing life into every brick and mortar. Together, we meticulously navigated the spectrum of design possibilities, from inception to the crowning moment of completion. 
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
              <video width="750" height="500" autoPlay controls muted>
                <source src={video2} type="video/mp4"  />
              </video>
            </div>
            <div className="item2">
            <div class="finesh_background">
            <div class="finesh_gallery">
                <div class="finesh_card">
                    <figure>
                        <img
                       src={finishdata[0].images[0]}
                        alt="Preview"
                        />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                       src={finishdata[0].images[1]}
                        alt="Preview"
                        />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                            src={finishdata[0].images[2]}
                            alt="Preview"
                       />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                        src={finishdata[0].images[3]}
                        alt="Preview"
                        />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                        src={finishdata[1].images[0]}
                        alt="Preview"
                        />
                    </figure>
                </div>
            </div>            
        </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl font-serif  grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        
          <div className="grid grid-cols-2 grid-rows-2 gap-1 sm:gap-2 lg:gap-2">
            <div className="item">
              <video width="750" height="500" controls autoPlay muted>
                <source src={video1} type="video/mp4"  />
              </video>
            </div>
            <div className="item2">
            <div class="finesh_background">
            <div class="finesh_gallery">
            <div class="finesh_card">
                    <figure>
                        <img
                       src={finishdata[1].images[1]}
                        alt="Preview"
                        />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                       src={finishdata[1].images[2]}
                        alt="Preview"
                        />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                            src={finishdata[1].images[3]}
                            alt="Preview"
                       />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                        src={finishdata[2].images[0]}
                        alt="Preview"
                        />
                    </figure>
                </div>
                <div class="finesh_card">
                    <figure>
                        <img
                        src={finishdata[2].images[1]}
                        alt="Preview"
                        />
                    </figure>
                </div>
            </div>            
        </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
             Duplex in Marassi
            </h2>
            <p className="mt-4 text-gray-500">
            Embarking on a journey of transformation, we took a humble unit standing on bricks and turned it into a symphony of elegance. In harmonious collaboration with a distinguished decor company and ingenious design engineers, we commenced a creative voyage from the ground up.
Layer by layer, from concept to completion, we poured our passion into every facet. It wasn't just about constructing walls; it was about sculpting an experience. Windows welcomed natural light, while meticulously chosen fixtures cast a glow on aspirations.
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

