import Card from "./../shared/card/Card";
import Filter from "../shared/filter/Filter";
import Slider from "../shared/slider/Slider";
import style from "./unit.module.css";

const Units = () => {
  return (
    <>
      <Filter />
      <div className="">
        <h2 className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}>
          Unit For Sale
        </h2>
        <Card />

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

        <Card />
        <div className="card-see-more-button flex w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10 ">
          <button className="btn-see-more  mb-10  bg-black py-2 px-3 text-white">See More</button>
        </div>

      </div>
    </>
  );
};

export default Units;
