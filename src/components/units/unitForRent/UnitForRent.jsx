import React, { useState } from "react";
import Card from "../../shared/card/Card";
import Pagination from "../../shared/pagination/Pagination";
import Filter from "../../shared/filter/Filter";
import style from "./../unit.module.css";
import { data } from "./../../auth/firebase/Firebase";

const itemsPerPage = 9;

const UnitForRent = () => {
  const rentData = data[1];
  const [currentPage, setCurrentPage] = useState(1);
  const [dropDownFilter, setDropDownFilter] = useState("");
  const [price, setPrice] = useState(0);
  const [floorArea, setFloorArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [searchText, setSearchText] = useState("");
  const [location , setLocation] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;



  const currentItems = rentData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleFilterChange = (e) => {
    setDropDownFilter(e.target.value);
  };



  const resetFilters = () => {
    setDropDownFilter("");
    setPrice(0);
    setFloorArea("");
    setBedrooms("");
    setLocation("");

  };

  const handleFilterPrice = (e) => {
    setPrice(parseInt(e.target.value, 10) || 0);
  };

  const handleFilterFloorArea = (e) => {
    setFloorArea(e.target.value);
  };

  const handleFilterBedrooms = (e) => {
    setBedrooms(e.target.value);
  };



  const handleSearchChange = (e) => {
    const searchTextWithoutSpaces = e.target.value.trim();
    setSearchText(searchTextWithoutSpaces);
  };

  const handleFilterLocation = (e) => {
    setLocation(e.target.value);
  };



  const filteredData = rentData.filter((x) => {
    const isTypeMatch = x.type_of_unit.includes(dropDownFilter);
    const isPriceMatch =
      price === 0 ||
      (price === 5000 && parseInt(x.pricePerDay, 10) <= 5000) ||
      (price === 10000 && parseInt(x.pricePerDay, 10) > 5000 && parseInt(x.pricePerDay, 10) <= 10000) ||
      (price === 100000 && parseInt(x.pricePerDay, 10) > 10000 && parseInt(x.pricePerDay, 10) <= 100000);


    const isAreaMatch = floorArea === "" ||
      (floorArea.includes("-") &&
        x.area >= parseInt(floorArea.split("-")[0], 10) &&
        x.area <= parseInt(floorArea.split("-")[1], 10)) ||
      x.area === parseInt(floorArea, 10);
    const isBedroomsMatch = bedrooms === "" || (x.rooms && x.rooms === parseInt(bedrooms, 10));
    const typeLocation = x.region.includes(location ); 
 

    const isSearchMatch =
      x.type_of_unit.toLowerCase().includes(searchText.toLowerCase()) ||
      x.pricePerDay.toString().includes(searchText);

    return isTypeMatch && isPriceMatch && isAreaMatch && isBedroomsMatch && isSearchMatch && typeLocation ;
  });


  const displayItems = searchText || price || floorArea || dropDownFilter || bedrooms || location ? filteredData : currentItems
  const hasActiveFilters = !!dropDownFilter || !!price || !!floorArea || !!bedrooms ||!!location;
  const hasSearchInput = !!searchText;
  const hasActiveFiltersOrSearch = hasActiveFilters || hasSearchInput;
  
  return (
    <div>

      <div className="flex justify-center items-center w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto  my-10 ">
        <div className="w-full  shadow p-5 rounded-lg bg-white ">
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
              className="px-9 py-3 w-full font-serif rounded-md bg-transparent font-serif text-black border-beige1 focus:border-beige focus:bg-white focus:ring-0 text-sm "
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium font-serif">Filters</p>
            <button onClick={resetFilters} className="px-4 py-2 bg-beige1 font-serif text-black hover:bg-beige hover:text-white text-sm font-medium rounded-md">
              Reset Filter
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 font-serif">
              <select
                onChange={handleFilterChange}
                value={dropDownFilter}
                className="px-4 py-3 w-full rounded-md font-serif bg-beige1 text-black border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm"
              >
                <option value="">Home Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Appartment</option>
                <option value="studio">Studio</option>
                <option value="duplex">duplex</option>
              </select>
              <select
                onChange={handleFilterPrice}
                value={price.toString()}
                className="px-4 py-3 w-full rounded-md font-serif bg-beige1 border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm"
              >
                <option value="0"> Price</option>
                <option value="5000">EGP up to 5000</option>
                <option value="10000">EGP up to 10000</option>
                <option value="100000">EGP up to 100000</option>
              </select>
              <select
                onChange={handleFilterFloorArea}
                value={floorArea}
                className="px-4 py-3 w-full rounded-md font-serif bg-beige1 border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm"
              >
                <option value="">Floor Area</option>
                <option value="0-200"> up to 200 sq.ft</option>
                <option value="201-400"> 200 - 400 sq.ft</option>
                <option value="401-600"> 400 - 600 sq.ft</option>
              </select>
              <select
                onChange={handleFilterBedrooms}
                value={bedrooms}
                className="px-4 py-3 w-full rounded-md font-serif bg-beige1 border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm"
              >
                <option value="">Bedrooms</option>
                <option value="1">1 bedroom</option>
                <option value="2">2 bedrooms</option>
                <option value="3">3 bedrooms</option>
                <option value="4">4 bedrooms</option>
                <option value="5">5 bedrooms</option>
              </select>

              <select
                onChange={handleFilterLocation}
                value={location}
                className="px-4 py-3 w-full rounded-md font-serif bg-beige1 text-black border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm"
              >
                <option value="" >location </option>
                <option value="Sheikh Zayed">Sheikh Zayed</option>
                <option value="New Administrative Capital">New Administrative Capital</option>
                <option value="North Coast">North Coast</option>
                <option value="Marsa Alam">Marsa Alam</option>
                <option value="Alexandria">Alexandria</option>
                <option value="el Gouna">el Gouna</option>
              </select>

            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.header} font-serif text-left text-3xl w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto`}
      >
        {" "}
        For Rent{" "}
      </div>
      <div className="flex flex-wrap justify-center">
        {displayItems.map((card) => (
          <div key={card.id}>
            <Card {...card} />
          </div>
        ))}
      </div>

      {!hasActiveFiltersOrSearch && (
        <Pagination currentPage={currentPage} totalPages={Math.ceil(rentData.length / itemsPerPage)} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default UnitForRent;
