import React from 'react';
import Card from '../../shared/card/Card'
import Pagination  from '../../shared/pagination/Pagination';
import Filter from "../../shared/filter/Filter";
import style from "./../unit.module.css";


const UnitForRent = () => {

  return (
    <div>
      <Filter/>
      <div className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}> For Rent </div>
      <div className=" flex flex-wrap justify-center">
        {cardData.map(card => (
          <div key={card.id} >
            <Card
              {...card}
            />
          </div>
        ))}
      </div>
      <Pagination/>
    </div>

  );
};

export default UnitForRent;



