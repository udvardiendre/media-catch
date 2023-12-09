"use client"
import Link from 'next/link'
import React from 'react'

import {useState, useEffect} from 'react'
import { useSearchParams } from "next/navigation"
import Image from 'next/image'
import SimilarProductsSlide from '@/components/SimilarProductsSlide'

import camera_icon from "@/public/assets/icons/camera_icon.png"



type Props = {};

const ShowProduct = (props: Props) => {

const [product, setProduct] = useState<{[key: string]: any}>({})
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const similarProductsSearchParam = searchParams.get("similar")
  const [similarProducts, setSimilarProducts] = useState([])
  const [currentPicture, setCurrentPicture] = useState(0)

  useEffect(() => {
    const getProductDetails = async () => {
    const response = await fetch(`api/product/${productId}`);
    const data = await response.json();

      setProduct({
        brand: data.brand,
        name: data.name,
        price: data.price,
        description: data.description,
        photos: data.photos,
        createdAt: data.createdAt
        })

    };
    setSimilarProducts(JSON.parse(similarProductsSearchParam as string))

    if (productId) getProductDetails();
  }, [productId, similarProductsSearchParam]);

  return (
  <section>
    {product?.photos ? (
    <div className="bg-primary-bg flex flex-col items-center justify-center gap-3">
      <div className='min-[935px]:w-[935px] w-full flex justify-between items-center mt-10'>
        <div className='w-[620px] h-[406px] overflow-hidden relative'>
          <Image className="object-fill" fill={true} src={product.photos[currentPicture] as string} alt="product_photo" />
          <div className='absolute w-[50px] h-[21px] bg-primary-grey rounded-full bottom-2 left-2 flex items-center justify-evenly'>
            <Image src={camera_icon} alt="camera_icon"/>
            <p className='text-tertiary-grey text-[10px]'>{product.photos.length}</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 w-[32%]'>
          {product.photos && product.photos.length > 1 && product.photos.map((picUrl: string, index: number) => (<button className="relative h-[95px] w-[140px] object-fill overflow-hidden" key={index} onClick={() => setCurrentPicture(index)}><Image className="object-cover" fill={true} src={picUrl} alt={`product_photo +_${index}`} /></button>))}
        </div>
      </div>
      <div className='min-[935px]:w-[935px] w-full bg-white p-5 rounded-xl text-tertiary-grey flex flex-col gap-3'>
        <p className='text-[20px]'>Ár: <span className='font-bold text-[28px]'>{`${product.price}`}</span> Ft</p>
        <p className='font-bold text-[24px]'>{product.brand}</p>
        <p className='text-[18px]'>{product.name}</p>
        <p className='font-bold text-[17px]'>Leírás</p>
        <p className='text-[14px]'>{product.description}</p>
        <p className='font-bold text-[14px]'>{`Feladás dátuma: ${product.createdAt}`}</p>
        <button className='w-[132px] h-[39px] bg-primary-orange text-white font-bold text-[12px] rounded-md' >Kosárba teszem</button>
      </div>
      <div className='min-[935px]:w-[935px] w-full flex justify-start'>
        <p className='text-tertiary-grey text-[12px] py-2'>{`Hirdetés azonosító: ${productId}`}</p>
      </div>
      <div className='min-[935px]:w-[935px] w-full flex flex-col items-center justify-center'>
        <p className='text-tertiary-grey font-medium text-[20px] self-start'>Hasonló hírdetések</p>
        <div>
          <SimilarProductsSlide similarProducts={similarProducts} />
        </div>
      </div>
    </div>): (<div className='h-[100vh] flex justify-center items-center bg-primary-bg'><h1 className='font-bold text-[24px]'>Loading...</h1></div>)}
  </section>);
};

export default ShowProduct;
