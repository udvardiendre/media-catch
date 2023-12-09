import React from 'react'

type Props = {
    startPage: number,
    endPage: number,
    currentPage: number,
    productsPerPage: number,
    filteredProducts: any,
    setCurrentPage: any
}

const Pagination = ({startPage, endPage, currentPage, productsPerPage, filteredProducts, setCurrentPage}: Props) => {
  return (
    <div className="min-[935px]:w-[935px] w-full flex gap-2 justify-end mt-10 pr-5">
          <button
            onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
            className={`w-[79px] h-[38px] border border-primary-grey rounded-md ${
              currentPage === 1
                ? "bg-[#E7E7E7] cursor-not-allowed"
                : "bg-white"
            }`}
            disabled={currentPage === 1}
          >
            Vissza
          </button>
          {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
            <button
              key={startPage + index}
              onClick={() => setCurrentPage(startPage + index)}
              className={`w-[38px] h-[38px] border border-primary-grey rounded-md ${
                currentPage === startPage + index
                  ? "bg-[#E7E7E7]"
                  : "bg-white"
              }`}
            >
              {startPage + index}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev :any) =>
                Math.min(
                  prev + 1,
                  Math.ceil(filteredProducts.length / productsPerPage)
                )
              )
            }
            className={`w-[79px] h-[38px] border border-primary-grey rounded-md ${
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
                ? "bg-[#E7E7E7] cursor-not-allowed"
                : "bg-white"
            }`}
            disabled={
              currentPage ===
              Math.ceil(filteredProducts.length / productsPerPage)
            }
          >
            Tovább
          </button>
        </div>
  )
}

export default Pagination