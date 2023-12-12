"use client"
import React from 'react'
import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartItem from './CartItem';


type Props = {

}


export const CartItemsList = (props: Props) => {
  const { cartItems } = useShoppingCart();
  console.log(cartItems)

  
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        {cartItems.map(item => (
          <CartItem key={item.id} id={item.id} quantity={item.quantity}/>
        ))}
    </div>
  )
}

