import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


import info_icon from "@/public/assets/icons/info_icon.png"
import cart_icon_trans_white from "@/public/assets/icons/cart_icon_trans_white.png"
import { useRouter } from 'next/navigation'
import { useShoppingCart } from '@/context/ShoppingCartContext'



type Props = {
    id?: string
    brand: string
    name: string
    price: string
    description: string
    images: string[]
    similarProducts?: any[]
}

const ProductCard = ({id, brand, name, price, description, images, similarProducts}: Props) => {

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(id as string)


  const pathName = usePathname()
  const router = useRouter()

  const goToDetails = () => {
    const serializedProducts = JSON.stringify(similarProducts);
    router.push(`/show-product?id=${id}&similar=${encodeURIComponent(serializedProducts)}`)
  }


  return (
    <div>
      <div className='flex gap-5 max-[702px]:flex-col w-full justify-between'>
            <div className='flex gap-2 max-[550px]:flex-col max-[550px]:items-center'>
              <Image  className="object-cover min-[551px]:object-contain self-start" width={240} height={148} src={images[0]} alt="product-picture"/>
              <div className='flex flex-col gap-2 min-[551px]:w-[50%] w-full' >
                  <h1 className="font-medium text-xl">{brand}</h1>
                  <h1 className='font-normal font-sourceSansPro text-[20px] border-b-2 border-terinary-grey'>{name}</h1>
                  <p className='text-secondary-grey text-[14px]'>Leírás</p>
                  <p className='font-sourceSansPro text-[14px]'>{description}</p>
                  {pathName !== '/search' && <h1 className='font-sourceSansPro text-[25px]'>{`${price} Ft`}</h1>}
              </div>
            </div>
            {pathName === "/search" && 
              <div className='bg-primary-grey min-w-[235px] h-[154px] p-4 flex flex-col gap-2'>
                <p className='font-sourceSansPro text-[25px]' >{price + " Ft"}</p>
                <div className='flex items-center gap-2'>
                  <p className='font-sourceSansPro text-[13px] text-secondary-grey'>Szállítási költség: 1499 Ft</p>
                  <Link href="/"><Image className="h-[15px] w-[15px]"  src={info_icon} alt="info_icon"/></Link>
                </div>
                {quantity === 0 ? (
                <button onClick={() => increaseCartQuantity(id as string)} className='bg-primary-green rounded-sm flex justify-center items-center gap-2 h-[35px]'>
                  <Image className="h-[18px] w-[18px]" src={cart_icon_trans_white} alt="cart_icon_trans_white"/>
                  <p className='font-sourceSansPro text-[18px] text-white'>Kosárba</p>
                </button>) : (
                  <div className='flex justify-center gap-4'>
                    <button className="bg-secondary-grey h-6 w-6 rounded-sm text-white font-medium" onClick={() => decreaseCartQuantity(id as string)}>-</button>
                    <p>{quantity}</p>
                    <button className="bg-secondary-grey h-6 w-6 rounded-sm text-white font-medium" onClick={() => increaseCartQuantity(id as string)}>+</button>
                  </div>
                )}
                <button className='underline font-sourceSansPro text-[13px] text-quaternary-grey' onClick={goToDetails}>Részletek</button>
              </div>}
          </div>
          {pathName === "/cart" && 
                <div className='flex max-[500px]:flex-col max-[500px]:gap-2 w-full justify-evenly items-center mt-5 '>
                  <div className='flex justify-center items-center gap-4'>
                    <button className="bg-secondary-grey h-[38px] w-[38px]  rounded-sm text-white font-medium text-[16px]" onClick={() => decreaseCartQuantity(id as string)}>-</button>
                    <p className='text-[16px]'>{quantity}</p>
                    <button className="bg-secondary-grey h-[38px]  w-[38px]  rounded-sm text-white font-medium text-[16px]" onClick={() => increaseCartQuantity(id as string)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(id as string)} className='h-[38px] w-[323px] bg-primary-red rounded-sm text-[16px] font-medium text-white'> 
                    Eltávolítás a kosárból
                  </button>
                </div>
              }
        </div>
  )
}

export default ProductCard