import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'


type Props = {
    brand: string
    name: string
    price: string
    description: string
    images: string[]
}

const ProductCard = ({brand, name, price, description, images}: Props) => {


    const pathName = usePathname()
  return (
    <div className='flex gap-5 max-[702px]:flex-col'>
            <Image  className="object-contain self-start" width={240} height={148} src={images[0]} alt="product-picture"/>
            <div className='flex flex-col gap-2'>
                <h1 className="font-medium text-xl">{brand}</h1>
                <h1 className='font-normal font-sourceSansPro text-[20px] border-b-2 border-terinary-grey'>{name}</h1>
                <p className='text-secondary-grey text-[14px]'>Leírás</p>
                <p className='font-sourceSansPro text-[14px]'>{description}</p>
                {pathName !== '/search' && <h1 className='font-sourceSansPro text-[25px]'>{`${price} Ft`}</h1>}
            </div>
        </div>
  )
}

export default ProductCard