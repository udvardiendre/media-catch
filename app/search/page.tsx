"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchProductCard from "@/components/SearchProductCard";
import Image from "next/image";
import Link from "next/link";

import house_icon from "@/public/assets/icons/house_icon.png";
import right_arrow_icon from "@/public/assets/icons/right_arrow_icon.png";

import Pagination from "@/components/Pagination";

type Props = {};

const Search = (props: Props) => {
  const searchParams = useSearchParams();
  const queryString = searchParams.get("q");

  const [allProducts, setAllProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 1;

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(
    startPage + 3,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();

    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = (searchText: string) => {
      const regex = new RegExp(searchText, "i");
      return allProducts.filter(
        (product: any) =>
          regex.test(product.creator.username) ||
          regex.test(product.brand) ||
          regex.test(product.name) ||
          regex.test(product.description)
      );
    };

    const handleSearch = () => {
      const filteredProducts = filterProducts(queryString as string);
      setFilteredProducts(filteredProducts);
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;

      setSearchedResults(filteredProducts.slice(startIndex, endIndex));
    };

    handleSearch();
  }, [queryString, allProducts, currentPage]);

  console.log(searchedResults);
  return (
    <section className="flex flex-col my-5 items-center">
      <div className="min-[935px]:w-[935px] w-full border-b-2 pb-3 max-[935px]:pl-2">
        <div className="flex gap-1 items-center">
          <Link href="/">
            <Image
              className="h-[16px] w-[16px]"
              src={house_icon}
              alt="house_icon"
            />
          </Link>
          <Image
            className="h-[16px] w-[16px]"
            src={right_arrow_icon}
            alt="house_icon"
          />
          <p className="font-sourceSansPro text-[14px] text-quaternary-grey">
            Keresés eredménye
          </p>
        </div>
      </div>
      <div className="min-[935px]:w-[935px] w-full border-b-2 flex justify-between p-3">
        <div className="flex items-center gap-1 self-start ">
          <p className="font-sourceSansPro text-[24px]">Találatok</p>
          <p className="font-sourceSansPro text-[14px] text-secondary-grey">{`(${filteredProducts.length} db)`}</p>
        </div>
        <div>
          <p className="font-sourceSansPro text-[14px] font-bold">Rendezés</p>
          <input
            className="h-[30px] w-[194px] border p-2 text-[14px] "
            type="text"
            placeholder="Keresőszó egyezése szerint"
          />
        </div>
      </div>
      {searchedResults.length > 0 && (
        <Pagination startPage={startPage} endPage={endPage} currentPage={currentPage} productsPerPage={productsPerPage} filteredProducts={filteredProducts} setCurrentPage={setCurrentPage}/>
      )}
      <div>
        {searchedResults ? (
          <div className="flex flex-col items-center">
            {searchedResults.map((product: any) => (
              <SearchProductCard
                key={product._id}
                id={product._id}
                brand={product.brand}
                name={product.name}
                price={product.price}
                description={product.description}
                images={product.photos}
                similarProducts={filteredProducts}
              />
            ))}
          </div>
        ) : (
          <h1>Nincs találat</h1>
        )}
      </div>
      {searchedResults.length > 0 && (
        <Pagination startPage={startPage} endPage={endPage} currentPage={currentPage} productsPerPage={productsPerPage} filteredProducts={filteredProducts} setCurrentPage={setCurrentPage}/>
      )}
    </section>
  );
};

export default Search;
