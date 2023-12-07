import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


import info_icon from "@/public/assets/icons/info_icon.png"
import cart_icon_trans_white from "@/public/assets/icons/cart_icon_trans_white.png"
import { useRouter } from 'next/navigation'

type Props = {
    id?: string
    brand: string
    name: string
    price: string
    description: string
    images: string[]
}

const ProductCard = ({id, brand, name, price, description, images}: Props) => {


  const pathName = usePathname()
  const router = useRouter()

  const goToDetails = () => {
    router.push(`/show-product?id=${id}`)
  }


  return (
    <div className='flex gap-5 max-[702px]:flex-col w-full justify-between'>
            <Image  className="object-contain self-start" width={240} height={148} src={images[0]} alt="product-picture"/>
            <div className='flex flex-col gap-2'>
                <h1 className="font-medium text-xl">{brand}</h1>
                <h1 className='font-normal font-sourceSansPro text-[20px] border-b-2 border-terinary-grey'>{name}</h1>
                <p className='text-secondary-grey text-[14px]'>Leírás</p>
                <p className='font-sourceSansPro text-[14px]'>{description}</p>
                {pathName !== '/search' && <h1 className='font-sourceSansPro text-[25px]'>{`${price} Ft`}</h1>}
            </div>
            {pathName === "/search" && 
              <div className='bg-primary-grey min-w-[235px] h-[154px] p-4 flex flex-col gap-2'>
                <p className='font-sourceSansPro text-[25px]' >{price + " Ft"}</p>
                <div className='flex items-center gap-2'>
                  <p className='font-sourceSansPro text-[13px] text-secondary-grey'>Szállítási költség: 1499 Ft</p>
                  <Link href="/"><Image className="h-[15px] w-[15px]"  src={info_icon} alt="info_icon"/></Link>
                </div>
                <Link className='bg-primary-green rounded-sm flex justify-center items-center gap-2 h-[35px]' href="/cart">
                  <Image className="h-[18px] w-[18px]" src={cart_icon_trans_white} alt="cart_icon_trans_white"/>
                  <p className='font-sourceSansPro text-[18px] text-white'>Kosárba</p>
                </Link>
                <button className='underline font-sourceSansPro text-[13px] text-quaternary-grey' onClick={goToDetails}>Részletek</button>
              </div>}
        </div>
  )
}

export default ProductCard