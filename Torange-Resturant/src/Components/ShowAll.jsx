import  { useState } from 'react';
import { Food_list } from "../assets/Item_Infoes";
import FoodItem from "../Components/FoodItem";

const ShowAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(Food_list.length / itemsPerPage);
  const maxPagesToShow = 3; 

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const currentItems = Food_list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='my-16'>
      <div className="flex flex-wrap m-auto justify-center gap-10">
        {currentItems.map((item, index) => (
          <FoodItem key={index} id={item._id} title={item.title} text={item.text} newprice={item.newprice} img={item.img} />
        ))}
      </div>

      
      <div className="flex justify-center mt-4">
        {startPage > 1 && (
          <button
            onClick={() => setCurrentPage(prevPage => prevPage - 1)}
            className="px-4 py-2 m-2 bg-gray-300 rounded"
          >
            قبلی
          </button>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const pageNumber = startPage + index;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`px-4 py-2 m-2 rounded ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {pageNumber}
            </button>
          );
        })}
        {endPage < totalPages && (
          <button
            onClick={() => setCurrentPage(prevPage => prevPage + 1)}
            className="px-4 py-2 m-2 bg-gray-300 rounded"
          >
            
            بعدی
          </button>
        )}
      </div>
    </div>
  );
}

export default ShowAll;
