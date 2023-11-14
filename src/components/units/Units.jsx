import Card from "./../shared/card/Card";
import Filter from "../shared/filter/Filter";
import Slider from "../shared/slider/Slider";
import style from "./unit.module.css";
import { data } from './../auth/firebase/Firebase' 
import { Link } from "react-router-dom";
const Units = () => {
  const salesData=data[0];
  const rentData=data[1];
  return (
    <>
      <Filter />
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}>
          Unit For Sale
        </h2>
        <div className=" flex flex-wrap justify-center">
          {salesData.slice(0, 3).map(card => (
            <div key={card.id} className="">
              <Card
                {...card}
              />
            </div>
          ))}
        </div>
        <div className="card-see-more-button flex w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10 ">
          <Link to='unit-for-sale' className="btn-see-more mb-10  bg-black py-2 px-3 text-white">See More</Link>
        </div>
      </div>
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}>Added Recently
        </h2>
        <Slider {...rentData} />
      </div>
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10`}>
          Unit For Rent
        </h2>
        <div className=" flex flex-wrap justify-center">
          {rentData.slice(3, 6).map(card => (
            <div key={card.id} className="">
              <Card
                {...card}
              />
            </div>
          ))}
        </div>
        <div className="card-see-more-button flex w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10 ">
          <Link to='unit-for-rent'  className="btn-see-more  mb-10  bg-black py-2 px-3 text-white">See More</Link>
        </div>

      </div>
      
    </>
  );
};

export default Units;
