"use client"
import Link from 'next/link'
import React from 'react'

import {useState, useEffect} from 'react'
import { useSearchParams } from "next/navigation"
import Image from 'next/image'


type Props = {};

const ShowProduct = (props: Props) => {

const [product, setProduct] = useState<{[key: string]: any}>({})
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
  <section className="bg-primary-bg flex flex-col items-center justify-center">
    <div>
      {product.photos ? (<Image width={620} height={406} src={product.photos[0] as string} alt="product_photo" />):(<p>Loading...</p>)}
    </div>
    <div>
      <p>{`Ár: ${product.price} Ft`}</p>
      <p>{product.brand}</p>
      <p>{product.name}</p>
      <p>Leírás</p>
      <p>{product.description}</p>
      <p>Feladás dátuma: .....</p>
      <Link href="/cart">Kosárba teszem</Link>
    </div>
    <div></div>
    <div></div>
  </section>);
};

export default ShowProduct;
