"use client"

import React, { useState, useEffect } from 'react'
import { useSearchParams } from "next/navigation"


type Props = {}

const Search = (props: Props) => {
  
  const searchParams = useSearchParams()
  const queryString = searchParams.get('q')

  const [allProducts, setAllProducts] = useState([]);
  
  const [searchedResults, setSearchedResults] = useState([]);


  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();

    setAllProducts(data);
  };

  const filterProducts = (searchText: string) => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return allProducts.filter(
      (product: any) =>
        regex.test(product.creator.username) ||
        regex.test(product.brand) ||
        regex.test(product.name) ||
        regex.test(product.description)
    );
  };

  useEffect(() => {
    fetchProducts();
    
  }, []);
  
  setSearchedResults(filterProducts(queryString as string))
  return (
    <section>
      <h1>Nacsá</h1>
    </section>
  )
}

export default Search