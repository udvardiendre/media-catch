"use client"

import React, { useState, useEffect } from 'react'
import { useSearchParams } from "next/navigation"
import SearchProductCard from '@/components/SearchProductCard'
import Image from 'next/image'
import Link from 'next/link'

import house_icon from "@/public/assets/icons/house_icon.png"
import right_arrow_icon from "@/public/assets/icons/right_arrow_icon.png"


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

  useEffect(() => {
    fetchProducts();
  },[])
  
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
    }

    const handleSearch = () => {
      setSearchedResults(filterProducts(queryString as string))
    }
    
    handleSearch()
  }, [queryString, allProducts]);

  console.log(searchedResults)
  return (
    <section className='flex flex-col my-5 items-center'>
      <div className='min-[935px]:w-[935px] border-b-2 pb-3'>
        <div className='flex gap-1 items-center'>
          <Link href="/"><Image className='h-[16px] w-[16px]' src={house_icon} alt='house_icon'/></Link>
          <Image className='h-[16px] w-[16px]' src={right_arrow_icon} alt='house_icon'/>
          <p className='font-sourceSansPro text-[14px] text-quaternary-grey' >Keresés eredménye</p>
        </div>
      </div>
      <div className='min-[935px]:w-[935px] border-b-2 flex justify-between p-3'>
        <div className='flex items-center gap-1 self-start '>
          <p className='font-sourceSansPro text-[24px]'>Találatok</p>
          <p className='font-sourceSansPro text-[14px] text-secondary-grey'>{`(${searchedResults.length} db)`}</p>
        </div>
        <div>
          <p className='font-sourceSansPro text-[14px] font-bold'>Rendezés</p>
          <input className="h-[30px] w-[194px] border p-2 text-[14px] " type="text" placeholder='Keresőszó egyezése szerint'/>
        </div>
      </div>
      <div>
        {searchedResults ? (
          <div className='flex flex-col items-center'>
            {searchedResults.map((product: any) => (
            <SearchProductCard key={product._id} id={product._id} brand={product.brand} name={product.name} price={product.price} description={product.description} images={product.photos}/>))}
          </div>
        ): 
        (<h1>Nincs találat</h1>)}
      </div>
    </section>
  )
}

export default Search