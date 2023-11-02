"use client"

import nav_logo from "@/public/assets/images/logos/logo_nav.png"
import cart_icon from "@/public/assets/icons/cart_icon.png"


import Image from "next/image"
import Link from "next/link"
import { useSession } from "next-auth/react"
import {signOut} from "next-auth/react"

type Props = {}

const Navbar = (props: Props) => {

  const {data: session} = useSession()



  return (
    <nav className="w-full p-2 min-[1025px]:p-0">
        <div className="flex justify-between max-w-5xl m-auto py-[16px] items-center">
            <div>
                <Link href="/"><Image src={nav_logo} alt="media-catch-logo" /></Link>
            </div>
            { session ? 
              (<div className="flex justify-between items-center gap-5">
                  <button onClick={() => signOut()} className=" text-base font-medium text-white bg-secondary-blue rounded-[4px] px-2 py-1">Kijelentkezés</button>
                  <Link href="/cart"><Image src={cart_icon} alt="cart-icon" /></Link>
              </div>)
              :(<div className="flex justify-between items-center gap-5">
                  <Link href="/register" className=" text-base font-medium text-secondary-blue">Regisztráció</Link>
                  <Link href="/sign-in" className=" text-base font-medium text-white bg-secondary-blue rounded-[4px] px-2 py-1">Belépés</Link>
                  <Link href="/cart"><Image src={cart_icon} alt="cart-icon" /></Link>
              </div>)}
        </div>
    </nav>
  )
}

export default Navbar