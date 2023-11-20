import Card from "./../shared/card/Card";
import Filter from "../shared/filter/Filter";
import Slider from "../shared/slider/Slider";
import style from "./unit.module.css";
import { data } from "./../auth/firebase/Firebase";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const Units = () => {
  const salesData = data[0];
  const rentData = data[1];
  console.log(rentData);
  const [filteredData, setFilteredData] = useState(salesData);
  const [lowerCaseSearchText, setLowerCaseSearchText] = useState("");
  const handleSearchInputChange = (searchText) => {
    const newLowerCaseSearchText = searchText.toLowerCase();
    setLowerCaseSearchText(newLowerCaseSearchText);
    
    if (newLowerCaseSearchText.includes("rent")) {
      setFilteredData(rentData);
    } else if (newLowerCaseSearchText.includes("sale")) {
      setFilteredData(salesData);
    } else {
      setFilteredData([]);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center w-full font-serif sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto  my-10 ">
        <div className="w-full  p-5 rounded-lg bg-white ">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-beige"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-9 py-3 w-full rounded-md bg-transparent text-black border-beige1 focus:border-beige focus:bg-white focus:ring-0 text-sm"
              onChange={(e) => handleSearchInputChange(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="">
        {lowerCaseSearchText.includes("rent") ? null : (
          <div>
            <h2
              className={`${style.header} font-serif capitalize text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}
            >
              Unit For Sale
            </h2>

            <div
              className={`flex   justify-center items-center ${style.card}`}
            >
              {lowerCaseSearchText.includes("sale")
                ? filteredData.map((card) => (
                    <div key={card.id} className="">
                      <Card {...card} />
                    </div>
                  ))
                : filteredData.slice(0, 3).map((card) => (
                    <div key={card.id} className="">
                      <Card {...card} />
                    </div>
                  ))}
            </div>
          </div>
        )}

        {lowerCaseSearchText.includes("sale") ||
        lowerCaseSearchText.includes("rent") ? null : (
          <div className={`${style.btn_see} flex w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10`}>
            <Link
              to="unit-for-sale"
              className="btn-see-more mb-10 bg-black py-2 px-3 text-white"
            >
              See More
            </Link>
          </div>
        )}
      </div>

      {lowerCaseSearchText.includes("sale") ||
      lowerCaseSearchText.includes("rent") ? null : (
        <div className="">
          <h2
            className={`${style.header} font-serif  text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}
          >
            Added Recently
          </h2>
          <Slider {...rentData} />
        </div>
      )}

      <div className="">
      {lowerCaseSearchText.includes("sale") ||
        lowerCaseSearchText.includes("rent") ? null : (
          <div>
            <h2
            className={`${style.header} font-serif capitalize text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10`}
            >
              Unit For Rent
            </h2>
            {filteredData.length > 0 && (
              <div
                className={`flex   justify-center items-center ${style.card}`}
              >
            
                  {rentData.slice(3, 6).map((card) => (
                      <div key={card.id} className="">
                        <Card {...card} />
                      </div>
                    ))
                  }
              </div>
            )}
          </div>
        )}

        {lowerCaseSearchText.includes("sale") ||
        lowerCaseSearchText.includes("rent") ? null : (
          <div className={`${style.btn_see}  font-serif flex  w-full sm:max-w-xl md.max-w-full lg:max-w-screen-xl md:px-5 mx-auto mt-10 `}>
            <Link
              to="unit-for-rent"
              className={` mb-10  font-serif bg-black py-2 px-3 text-white`}
            >
              See More
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Units;
