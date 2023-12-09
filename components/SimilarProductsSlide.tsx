"use client"
import React, { useState } from 'react'
import Image from 'next/image'


import right_arrow_icon from "@/public/assets/icons/right_arrow_icon.png";

type Props = {
    similarProducts: any[]
}

const SimilarProductsSlide = ({similarProducts}: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    

  const nextSlide = () => {
    const newIndex = currentIndex + itemsPerPage;
    setCurrentIndex(newIndex >= similarProducts.length ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentIndex - itemsPerPage;
    setCurrentIndex(newIndex < 0 ? similarProducts.length - itemsPerPage : newIndex);
  };

    console.log(similarProducts)
  return (
    <div className='flex items-center justify-between min-[935px]:w-[935px] w-full'>
        <button onClick={prevSlide} className='bg-white h-[26px] w-[26px] rounded-full flex justify-center items-center'><Image  className="rotate-180" width={12} height={18} src={right_arrow_icon} alt="left-arrow" /></button>
        <div className='flex gap-3 mt-5 mb-10'>
        {similarProducts.slice(currentIndex, currentIndex + itemsPerPage).map((product, index) => (
          <div key={index} className='bg-white'>
            <Image width={194} height={144} src={product.photos[0]} alt={`product_picture_${index}`} />
            <p className='text-[16px] font-bold text-secondary-blue px-2 pt-2'>{product.name}</p>
            <p className='text-[16px] font-bold text-primary-orange px-2 pb-2'>{`${product.price} Ft`}</p>
          </div>
        ))}
        </div>
        <button onClick={nextSlide} className='bg-white h-[26px] w-[26px] rounded-full flex justify-center items-center'><Image width={12} height={18} src={right_arrow_icon} alt="right-arrow" /></button>
    </div>
  )
}

export default SimilarProductsSlide