"use client";

import nav_logo from "@/public/assets/images/logos/logo_nav.png";
import cart_icon from "@/public/assets/icons/cart_icon.png";
import cart_icon_white from "@/public/assets/icons/cart_icon_white.png";
import hamburger_icon from "@/public/assets/icons/hamburger_icon.png";
import close_icon from "@/public/assets/icons/close_icon.png";
import magnifier_grey_icon from "@/public/assets/icons/magnifier_grey_icon.png"

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter } from 'next/navigation'

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const router = useRouter()
  const [searchParam, setSearchParam] = useState("")

  const handleSubmit = (e: any)=> {
    if(toggleDropdown){
      setToggleDropdown(!toggleDropdown)
    }
    e.preventDefault()
    console.log(searchParam)
    router.push(`/search?q=${searchParam}`)
  }

  return (
    <nav className="w-full p-2 min-[1025px]:p-0 shadow-md">
      <div className="flex justify-between max-w-5xl m-auto py-[16px] items-center">
        <div className="mr-2">
          <Link href="/">
            <Image src={nav_logo} alt="media-catch-logo" priority />
          </Link>
        </div>
        {/** Desktop Nav */}
        <div className="flex w-5/6 justify-end max-[900px]:hidden">
          {pathname === "/" ? (
            <></>
          ) : (
            <div className="w-4/6 mr-5 ml-3">
              <form onSubmit={handleSubmit} className="relative" >
              <input
                onChange={(e) => setSearchParam(e.target.value)}
                className="border border-secondary-grey rounded-full h-[40px] w-full pl-3"
                type="text"
                placeholder="Mit keresel?"
              />
              <button type="submit" className='w-[20px] h-[20px] absolute right-3 top-[10px]'><Image src={magnifier_grey_icon} alt="grey_magnifier" /></button>
              </form>
            </div>
            
          )}
          {session ? (
            <div className="flex justify-between items-center gap-5 ml-2">
              <Link href="/profile">
                <Image
                  src={session?.user?.image as string}
                  width={37}
                  height={37}
                  className="rounded-full border border-secondary-blue"
                  alt="profile"
                />
              </Link>
              <button
                onClick={() => signOut()}
                className=" text-base font-medium text-white bg-secondary-blue rounded-[4px] px-2 py-1"
              >
                Kijelentkezés
              </button>
              <Link href="/cart">
                <Image src={cart_icon} alt="cart-icon" />
              </Link>
            </div>
          ) : (
            <div className="flex justify-between items-center gap-5">
              <Link
                href="/register"
                className=" text-base font-medium text-secondary-blue"
              >
                Regisztráció
              </Link>
              <Link
                href="/sign-in"
                className=" text-base font-medium text-white bg-secondary-blue rounded-[4px] px-2 py-1"
              >
                Belépés
              </Link>
              <Link href="/cart">
                <Image src={cart_icon} alt="cart-icon" />
              </Link>
            </div>
          )}
        </div>
        {/** Mobile nav */}
        <div className="min-[900px]:hidden">
          <button onClick={() => setToggleDropdown(!toggleDropdown)}>
            <Image
              className="w-[40px] h-[35px]"
              src={hamburger_icon}
              alt="hamburger-icon"
            />
          </button>
          {toggleDropdown && (
            <div>
            <div className="z-[4] fixed top-[-15px] right-0 mt-4  w-1/2 h-full bg-primary-blue">
                <ul className="flex flex-col gap-4 p-5 items-stat">
                <button className="flex justify-end"><Image width={30} height={30} src={close_icon} alt="close_icon" onClick={() => setToggleDropdown(false)}/></button>
                <li>
                    <div className="w-full mr-5">
                      <form onSubmit={handleSubmit} className="relative">
                        <input
                            onChange={(e) => setSearchParam(e.target.value)}
                            className="border border-secondary-grey rounded-full h-[40px] w-full pl-3"
                            type="text"
                            placeholder="Mit keresel?"
                          />
                          <button type="submit" className='w-[20px] h-[20px] absolute right-3 top-[10px]'><Image src={magnifier_grey_icon} alt="grey_magnifier"/></button>
                        </form>
                    </div>
                </li>
              {session ? (
                <div className="flex flex-col gap-4" >
                    <li>
                      <Link href="/profile" onClick={() => setToggleDropdown(false)} className="flex items-center gap-2">
                        <p className="text-white text-base font-medium">Profil</p>
                        <Image
                          src={session?.user?.image as string}
                          width={30}
                          height={30}
                          className="rounded-full border border-white"
                          alt="profile"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/cart" onClick={() => setToggleDropdown(false)} className="flex items-center gap-2">
                      <p className="text-white text-base font-medium">Kosár</p> 
                      <Image src={cart_icon_white} width={20} height={20} alt="cart-icon" />
                      </Link>
                    </li>
                    <li>
                      <button className="text-white text-base font-medium" onClick={() => signOut()}>Kijelentkezés</button>
                    </li>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                    <li>
                      <Link className="text-white text-base font-medium" href="/register" onClick={() => setToggleDropdown(false)}>Regisztráció</Link>
                    </li>
                    <li>
                      <Link className="text-white text-base font-medium" href="/sign-in" onClick={() => setToggleDropdown(false)}>Bejelentkezés</Link>
                    </li>
                    <li>
                      <Link href="/cart" onClick={() => setToggleDropdown(false)} className="flex items-center gap-2">
                      <p className="text-white text-base font-medium">Kosár</p> 
                      <Image src={cart_icon_white} width={20} height={20} alt="cart-icon" />
                      </Link>
                    </li>
                </div>
              )}
              </ul>
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[3]" >
            </div>
          </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
