"use client"
import Link from 'next/link'
import React from 'react'

import {useState, useEffect} from 'react'
import { useSearchParams } from "next/navigation"


type Props = {};

const ShowProduct = (props: Props) => {

const [product, setProduct] = useState({
    brand: String,
    name: String,
    price: String,
    description: String,
    photos: [String]
})
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch(`api/product/${productId}`);
      const data = await response.json();

      setProduct({
        brand: data.brand,
        name: data.name,
        price: data.price,
        description: data.description,
        photos: data.photos
        })
    };

    if (productId) getProductDetails();
  }, [productId]);
  console.log(product)
  return (
  <section>
    <h1>Nacsá</h1>
  </section>);
};

export default ShowProduct;
