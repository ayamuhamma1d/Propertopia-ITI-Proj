import React, { useState } from 'react';

const Filter = ({ onSearchInputChange }) => {

  return (
    <>
      <div className="flex justify-center items-center w-full font-serif sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto  my-10 ">
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
              className="px-9 py-3 w-full rounded-md bg-transparent text-black border-beige1 focus:border-beige focus:bg-white focus:ring-0 text-sm"
              onChange={(e) => onSearchInputChange(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mt-4 font-serif">
            <p className="font-medium">Filters</p>
            <button className="px-4 py-2 bg-beige1 text-black hover:bg-beige hover:text-white text-sm font-medium rounded-md">
              Reset Filter
            </button>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
              <select className="px-4 py-3 w-full rounded-md font-serif bg-beige1 text-black border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm">
                <option value="" className='hover:bg-beige1 font-serif'>All Type</option>
                <option value="for-rent">For Rent</option>
                <option value="for-sale">For Sale</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md bg-beige1 text-black border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm">
                <option value="">Home Type</option>
                <option value="fully-furnished">Villa</option>
                <option value="partially-furnished">Flat</option>
                <option value="not-furnished">Studio</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md font-serif bg-beige1 border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm">
                <option value=""> Price</option>
                <option value="1000">EGP 100000</option>
                <option value="2000">EGP 20000</option>
                <option value="3000">EGP 30000</option>
                <option value="4000">EGP 40000</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md font-serif bg-beige1 border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm">
                <option value="">Floor Area</option>
                <option value="200">200 sq.ft</option>
                <option value="400">400 sq.ft</option>
                <option value="600">600 sq.ft</option>
                <option value="800 sq.ft">800</option>
                <option value="1000 sq.ft">1000</option>
                <option value="1200 sq.ft">1200</option>
              </select>
              <select className="px-4 py-3 w-full rounded-md font-serif bg-beige1 border-transparent focus:border-beige focus:bg-white focus:ring-0 text-sm">
                <option value="">Bedrooms</option>
                <option value="1">1 bedroom</option>
                <option value="2">2 bedrooms</option>
                <option value="3">3 bedrooms</option>
                <option value="4">4 bedrooms</option>
                <option value="5">5 bedrooms</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;