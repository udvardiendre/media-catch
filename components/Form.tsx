"use client"
import Link from 'next/link'
import React from 'react'

import {useState, useRef} from 'react'
import PhotoCard from './PhotoCard'
import { useRouter } from "next/navigation"
import { useSession } from 'next-auth/react'




type Props = {}

const Form = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [brand, setBrand] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [files, setFiles] = useState([])

  const [error, setError] = useState("")
  const router = useRouter()
  const {data: session} = useSession()

  const handleInputFiles = async (e: any) => {
    const inputFiles = e.target.files

    const newFiles = [...inputFiles].filter(file => {
      if(file.size <= 1024*1024 && file.type.startsWith('image/')){
        return file
      }else{
        setError("Túl nagy fájlméret vagy nem képet próbál feltölteni! (Maximum feltölthető fileméret 1 MB!)")
        return
      }
    })
    
    setFiles(prev => [...newFiles, ...prev] as never[])
    
    /* if(formRef.current !== null){
      formRef.current.reset()
    } */
    
  }

  const handleDeleteFile = async (index: number) => {
    const newFiles = files.filter((_,i) => i !== index)
    setFiles(newFiles)
  }

  const handleCloudinaryUpload = async () => {
    if (!files.length) {
      setError("Legalább 1 fénykép feltöltése kötelező!")
    }else if (files.length > 6){
      setError("Maximum 6db fénykép feltöltése lehetsges!")
    }

    const formData = new FormData()

    files.forEach(file => {
      formData.append('files', file)
    })

    console.log(formData.getAll('files'))
    
    try {
      const res = await fetch("api/uploadPhoto", {
        method: "POST",
        body: formData
    })

      if(res.ok){
        const result: string[] = []
        const data = await res.json()
        data.photos.forEach((photo: any )=> {
          result.push(photo.secure_url)
        })
        console.log("Success:", result)
        return result
      }

    } catch (error) {
      return error
    }

  }
  
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    
    const photos = await handleCloudinaryUpload()

    if(!brand || !name || !price || !description || !files){
        setError("Töltsd ki a kötelező mezőket!")
        return
    }

    try {
      if(session?.user !== undefined){
        const res = await fetch("api/product/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: session?.user.id,
                brand,
                name,
                price,
                description,
                photos
            })
        })
      

        if(res.ok && formRef.current !== null){
            formRef.current.reset()
            router.push("/profile")
        }else {
            console.log("Hiba a termék feltöltése során!")
        }
      }
    } catch (error) {
        console.log("Hiba a termék feltöltése során!", error)
    }
}


  return (
    <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] flex my-10 p-10 rounded shadow-md w-full flex-col justify-center'>
        <form className='flex flex-col justify-center gap-8' ref={formRef}>
            <h1 className='text-base font-medium'>Add meg a termék adatait!</h1>
            <input onChange={(e) => setBrand(e.target.value)} className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder="Márka" type="text" />
            <input onChange={(e) => setName(e.target.value)} className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder="Termék név" type="text" />
            <input onChange={(e) => setPrice(e.target.value)} className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder="Ár" type="number" />
            <textarea onChange={(e) => setDescription(e.target.value)} className='border border-tertiary-grey rounded text-base h-[140px] w-full pl-2 pt-2' placeholder="Termék leírás" ></textarea>
            <input onChange={handleInputFiles} className="mb-10" type="file" accept="image/* " multiple />
        </form>
        <div className='flex mb-10 gap-3 flex-wrap justify-center'>
        {files && files.map((file, index) => (
          <PhotoCard key={index} index={index} url={URL.createObjectURL(file)} handleDeleteFile={() => handleDeleteFile(index)} />
        ))}
        </div>
        {error && 
          <div>
            {error}
          </div>
        }
        <div className='flex w-full gap-2 flex-col min-[702px]:flex-row items-center' >
            <button onClick={handleSubmit} className=" w-1/2 text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Feltöltés</button>
            <Link className=" w-1/2 text-base font-medium text-white bg-secondary-grey rounded-[4px] px-2 py-1 text-center" href="/profile">Vissza</Link>
        </div>
    </div>
  )
}

export default Form