import Image from 'next/image'
import React from 'react'


type Props = {
    brand: string
    name: string
    price: string
    description: string
    images: string[]
}

const MyProductCard = ({brand, name, price, description, images}: Props) => {


    console.log(images)
  return (
    <div className='bg-secondary-bg max-w-[650px] min-[702px]:w-[702px] w-full flex mt-5 p-5 flex-col items-center rounded shadow-md'>
        <div>
            <Image width={240} height={148} src={images[0]} alt="product-picture"/>
        </div>
        <div className='flex w-full gap-2 flex-col min-[702px]:flex-row items-center' >
            <button className=" w-1/2 text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Módosítás</button>
            <button className=" w-1/2 text-base font-medium text-white bg-primary-red rounded-[4px] px-2 py-1">Törlés</button>
        </div>
    </div>
  )
}

export default MyProductCard