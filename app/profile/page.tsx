"use client"

import { useSession } from "next-auth/react"
import ProfileCard from "@/components/ProfileCard"
import MyProductsList from "@/components/MyProductsList"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"



type Props = {}

const Profile = (props: Props) => {
  const {data: session} = useSession()
  const router = useRouter()
  const [products, setProducts] = useState([])

  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`api/users/${session?.user.id}/products`)
      const data = await response.json()

      setProducts(data)
    }

    if(session?.user.id) fetchProducts()

  },[session?.user.id])

  const handleEdit = (productId: any) => {
    router.push(`/update-product?id=${productId}`)
  }

  const handleDelete = async (productId: any) => {
    const hasConfirmed = confirm("Biztosan törlöd a terméket?")

    if(hasConfirmed){
      try {
        await fetch(`/api/product/${productId.toString()}`,{method: 'DELETE'})
  
        const filteredProducts = products.filter((p: any) => p._id !== productId)

        setProducts(filteredProducts)
      } catch (error) {
        console.log(error)
      }
    }
    
  }

  console.log(products)

  return (
    <section className="bg-primary-bg flex flex-col items-center justify-center min-h-[70vh]">
        <ProfileCard/>
        <MyProductsList products={products} handleEdit={handleEdit} handleDelete={handleDelete} />
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