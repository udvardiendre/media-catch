"use client"

import {signOut} from "next-auth/react"
import { useSession } from "next-auth/react"
import ProfileCard from "@/components/ProfileCard"
import MyProductsList from "@/components/MyProductsList"
import Link from "next/link"

type Props = {}

const Profile = (props: Props) => {
  const {data: session} = useSession()
  console.log(session)
  return (
    <section className="bg-primary-bg flex flex-col items-center justify-center ">
        <ProfileCard/>
        <MyProductsList/>
        <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] flex mt-5 mb-10 p-5 flex-col gap-4 rounded shadow-md  w-full'>
          <h1 className="font-medium">Tölts fel egy új terméket</h1>
          <div className='flex justify-center w-full gap-2' >
              <Link href="/upload-product" className=" text-center w-1/2 text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Termék feltöltése</Link>
          </div>
        </div>
    </section>
  )
}

export default Profile