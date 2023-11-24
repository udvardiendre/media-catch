import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'


type Props = {
    brand: string
    name: string
    price: string
    description: string
    images: string[]
    handleEdit: (product: any) => void
    handleDelete: () => void
}

const MyProductCard = ({brand, name, price, description, images, handleEdit, handleDelete}: Props) => {



  
  console.log(images)
  return (
    <div className='bg-secondary-bg max-w-[650px] min-[702px]:w-[702px] w-full flex mt-5 p-5 flex-col gap-5 items-center rounded shadow-md'>
        <ProductCard brand={brand} name={name} price={price} description={description} images={images}/>
        <div className='flex w-full gap-2 flex-col min-[702px]:flex-row items-center' >
            <button onClick={() => handleEdit}className=" w-1/2 text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Módosítás</button>
            <button onClick={() => handleDelete}className=" w-1/2 text-base font-medium text-white bg-primary-red rounded-[4px] px-2 py-1">Törlés</button>
        </div>
    </div>
  )
}

export default MyProductCard