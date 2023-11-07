"use client"


import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react'


type Props = {}

const ProfileCard = (props: Props) => {

  const {data: session} = useSession()

  return (
    <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] flex mt-10 p-10 rounded shadow-md  w-full'>
        <div className='flex justify-center items-start gap-10 w-full'>
          <Image src={session?.user?.image as string} 
          width={100}
          height={100}
          className="rounded-full border-2 border-secondary-blue"
          alt="profile_picture"/>
          <div className="flex flex-col min-[702px]:flex-row min-[702px]:gap-10 gap-5">
            <div>
              <h1 className="font-medium" >{session?.user?.name as string}</h1>
              <h1 className="font-medium" >{session?.user?.email as string}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <Link href="/" className="text-center text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Adatok módosítása</Link>
              <button onClick={() => signOut()} className=" text-base font-medium text-white bg-secondary-blue rounded-[4px] px-2 py-1">Kijelentkezés</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard