import React from 'react';
import Card from '../../shared/card/Card'
import Filter from "../../shared/filter/Filter";
import Pagination from '../../shared/pagination/Pagination';
import style from "./../unit.module.css";

const UnitForSale = () => {
  const cardData = [
    { id: 1, title: 'Villa', price: '$5000', bedNum: '3', bathNum: '4', area: '600', location: 'Alexandria', type: 'For Sale' },
    { id: 2, title: 'Apartment', price: '$3990', bedNum: '2', bathNum: '1', area: '250', location: 'Alexandria', type: 'For Sale' },
    { id: 3, title: 'Villa', price: '$4990', bedNum: '6', bathNum: '4', area: '600', location: 'NorthCoast', type: 'For Sale' },
    { id: 4, title: 'Apartment', price: '$4100', bedNum: '3', bathNum: '2', area: '350', location: 'Alexandria', type: 'For Sale' },
    { id: 5, title: 'Villa', price: '$5100', bedNum: '7', bathNum: '4', area: '750', location: 'Alexandria', type: 'For Sale' },
    { id: 6, title: 'Apartment', price: '$4000', bedNum: '4', bathNum: '2', area: '350', location: 'NorthCoast', type: 'For Sale' },
    { id: 7, title: 'Villa', price: '$10000', bedNum: '8', bathNum: '4', area: '900', location: 'NorthCoast', type: 'For Sale' },
    { id: 8, title: 'Apartment', price: '$9000', bedNum: '4', bathNum: '2', area: '200', location: 'Alexandria', type: 'For Sale' },
    { id: 9, title: 'Villa', price: '$11000', bedNum: '9', bathNum: '4', area: '800', location: 'Alexandria', type: 'For Sale' },
    { id: 10, title: 'Apartment', price: '$12000', bedNum: '5', bathNum: '2', area: '300', location: 'Alexandria', type: 'For Sale' },
    { id: 11, title: 'Villa', price: '$7000', bedNum: '10', bathNum: '5', area: '700', location: 'NorthCoast', type: 'For Sale' },
    { id: 12, title: 'Apartment', price: '$8000', bedNum: '4', bathNum: '1', area: '300', location: 'Alexandria', type: 'For Sale' },
    { id: 13, title: 'Villa', price: '$6600', bedNum: '10', bathNum: '4', area: '1200', location: 'Alexandria', type: 'For Sale' },
    { id: 14, title: 'Apartment', price: '$9000', bedNum: '4', bathNum: '2', area: '200', location: 'NorthCoast', type: 'For Sale' },
    { id: 15, title: 'Villa', price: '$10000', bedNum: '9', bathNum: '5', area: '1500', location: 'Alexandria', type: 'For Sale' },
    { id: 16, title: 'Apartment', price: '$9000', bedNum: '6', bathNum: '2', area: '400', location: 'Alexandria', type: 'For Sale' },
    { id: 17, title: 'Villa', price: '$8000', bedNum: '11', bathNum: '6', area: '1500', location: 'Alexandria', type: 'For Sale' },
    { id: 18, title: 'Apartment', price: '$8000', bedNum: '6', bathNum: '3', area: '500', location: 'NorthCoast', type: 'For Sale' },
  ];
  return (
    <div>
      <Filter />
      <div className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}> For Sale </div>
      <div className=" flex flex-wrap justify-center">
        {cardData.map(card => (
          <div key={card.id} className="">
            <Card
              {...card}
            />
          </div>
        ))}
      </div>
      <Pagination />
    </div>

  );
};

export default UnitForSale;



