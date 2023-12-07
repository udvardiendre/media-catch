import React from 'react'
import ProductCard from './ProductCard'

type Props = {
    id: string
    brand: string
    name: string
    price: string
    description: string
    images: string[]
}

const SearchProductCard = ({ id, brand, name, price, description, images}: Props) => {
  return (
    <div className='bg-secondary-bg min-[935px]:w-[935px] w-full flex mt-5 p-5 flex-col gap-5 items-center rounded shadow-md'>
        <ProductCard id={id} brand={brand} name={name} price={price} description={description} images={images}/>
    </div>
  )
}

export default SearchProductCard