import React, { useState } from 'react';
import Card from '../../shared/card/Card'
import Filter from "../../shared/filter/Filter";
import Pagination from '../../shared/pagination/Pagination';
import style from "./../unit.module.css";
import { data } from './../../auth/firebase/Firebase' 

const UnitForSale = () => {
  const salesData=data[0];
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 9;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = salesData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); 
  };

  return (
    <div>
      <Filter />
      <div className={`${style.header} font-[Poppins] text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}> For Sale </div>
      <div className=" flex flex-wrap justify-center">
        {currentItems.map(card => (
          <div key={card.id} className="">
            <Card
              {...card}
            />
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(salesData.length / itemsPerPage)} onPageChange={handlePageChange} />
    </div>

  );
};

export default UnitForSale;



