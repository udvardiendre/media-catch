import React from 'react'
import ProductCard from './ProductCard'

type Props = {
    id: string
    brand: string
    name: string
    price: string
    description: string
    images: string[]
    similarProducts: any[]
}

const SearchProductCard = ({ id, brand, name, price, description, images, similarProducts}: Props) => {
  return (
    <div className='bg-secondary-bg min-[935px]:w-[935px] w-full flex mt-5 p-5 flex-col gap-5 items-center rounded shadow-md'>
        <ProductCard id={id} brand={brand} name={name} price={price} description={description} images={images} similarProducts={similarProducts}/>
    </div>
  )
}

export default SearchProductCard