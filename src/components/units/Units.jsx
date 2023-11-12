import Card from "./../shared/card/Card";
import Filter from "../shared/filter/Filter";
import Slider from "../shared/slider/Slider";
import style from "./unit.module.css";
import { data } from './../auth/firebase/Firebase' 
const Units = () => {
  console.log(data[0]);
  const cardData = [
    { id: 1, title: 'Villa', price: '$5000', bedNum: '3', bathNum: '4', area: '600', location: 'Alexandria', type: 'For Sale' },
    { id: 2, title: 'Apartment', price: '$3990', bedNum: '2', bathNum: '1', area: '250', location: 'Alexandria', type: 'For Sale' },
    { id: 3, title: 'Villa', price: '$4990', bedNum: '6', bathNum: '4', area: '600', location: 'NorthCoast', type: 'For Sale' },
  ];
  const cards = [
    { id: 1, title: 'Villa', price: '$5000', bedNum: '3', bathNum: '4', area: '600', location: 'Alexandria', type: 'For Rent' },
    { id: 2, title: 'Apartment', price: '$3990', bedNum: '2', bathNum: '1', area: '250', location: 'Alexandria', type: 'For Rent' },
    { id: 3, title: 'Villa', price: '$4990', bedNum: '6', bathNum: '4', area: '600', location: 'NorthCoast', type: 'For Rent' },

  ];
  return (
    <>
      <Filter />
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}>
          Unit For Sale
        </h2>
        <div className=" flex flex-wrap justify-center">
          {cardData.slice(0, 3).map(card => (
            <div key={card.id} className="">
              <Card
                {...card}
              />
            </div>
          ))}
        </div>
        <div className="card-see-more-button flex w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10 ">
          <button className="btn-see-more mb-10  bg-black py-2 px-3 text-white">See More</button>
        </div>
      </div>
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}>Added Recently
        </h2>
        <Slider />
      </div>
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10`}>
          Unit For Rent
        </h2>
        <div className=" flex flex-wrap justify-center">
          {cards.slice(0, 3).map(card => (
            <div key={card.id} className="">
              <Card
                {...card}
              />
            </div>
          ))}
        </div>
        <div className="card-see-more-button flex w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10 ">
          <button className="btn-see-more  mb-10  bg-black py-2 px-3 text-white">See More</button>
        </div>

      </div>
    </>
  );
};

export default Units;
