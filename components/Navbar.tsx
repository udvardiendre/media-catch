import nav_logo from "@/public/assets/images/logos/logo_nav.png"
import cart_icon from "@/public/assets/icons/cart_icon.png"


import Image from "next/image"
import Link from "next/link"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="w-full">
        <div className="flex justify-between max-w-5xl m-auto py-[16px] items-center">
            <div>
                <Link href="/"><Image src={nav_logo} alt="media-catch-logo" /></Link>
            </div>
            <div className="flex justify-between items-center gap-5">
                <Link href="/sign-in" className=" text-base font-medium text-secondary-blue">Regisztráció</Link>
                <Link href="/sign-in" className=" text-base font-medium text-white bg-secondary-blue rounded-[4px] px-2 py-1">Belépés</Link>
                <Link href="/cart"><Image src={cart_icon} alt="cart-icon" /></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar