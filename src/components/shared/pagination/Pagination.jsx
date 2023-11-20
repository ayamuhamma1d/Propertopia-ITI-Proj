import React from 'react';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftOffset = Math.floor(maxVisiblePages / 2);
      const rightOffset = totalPages - leftOffset;
      let startPage = currentPage - leftOffset;
      let endPage = currentPage + leftOffset;
      if (startPage <= 0) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (endPage > totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      }
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    return pageNumbers.map((pageNumber) => (
      <div
        key={pageNumber}
        className={`w-12 flex justify-center items-center ${
          pageNumber === currentPage ? 'bg-beige text-white' : ''
        } cursor-pointer leading-5 transition duration-150 ease-in rounded-full`}
        onClick={() => handlePageClick(pageNumber)}
      >
        {pageNumber}
      </div>
    ));
  };
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex flex-col items-center my-14">
      <div className="flex text-gray-700">
        <div
          className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-beige1 cursor-pointer"
          onClick={handlePreviousClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="flex h-12 font-medium rounded-full bg-transparent">
          {renderPageNumbers()}
        </div>
        <div
          className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-beige1 cursor-pointer"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Pagination;