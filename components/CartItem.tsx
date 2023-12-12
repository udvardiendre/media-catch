"use client"

import React from "react";
import ProductCard from "./ProductCard";


import { useEffect, useState } from "react";

type Props = {
    id: string, 
    quantity: number
};

const CartItem = ({id, quantity}: Props) => {

  const [product, setProduct] = useState<any>();
  

  useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch(`api/product/${id}`);
        const data = await response.json();
    
        setProduct(data);
      };
    fetchProducts();
  }, [id]);


  console.log(product)

  return (
    <div className='bg-secondary-bg min-[935px]:w-[935px] w-full flex mt-5 p-5 flex-col gap-5 items-center rounded shadow-md'>
        {product ? (<ProductCard id={product._id} brand={product.brand} name={product.name} price={product.price} description={product.description} images={product.photos} />) : (<h1>Loading...</h1>) }
    </div>
  )
};

export default CartItem;
