"use client"
import Link from 'next/link'
import React from 'react'

import {useState, useRef} from 'react'
import PhotoCard from './PhotoCard'





type Props = {}

const Form = (props: Props) => {
  const formRef = useRef()

  const [brand, setBrand] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [files, setFiles] = useState([])

  const [error, setError] = useState("")


  const handleInputFiles = async (e: any) => {
    const inputFiles = e.target.files

    const newFiles = [...inputFiles].filter(file => {
      if(file.size < 1024*1024 && file.type.startsWith('image/')){
        return file
      }else{
        setError("Túl nagy fájlméret vagy nem képet próbál feltölteni!")
        return
      }
    })
    
    setFiles(prev => [...newFiles, ...prev] as never[])
    console.log(files)
  }

  const handleDelete = async (e: any) => {

  }
  
  const handleSubmit = (e: any) => {
    
  }


  return (
    <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] flex my-10 p-10 rounded shadow-md w-full flex-col justify-center'>
        <form className='flex flex-col justify-center gap-8'>
            <h1 className='text-base font-medium'>Add meg a termék adatait!</h1>
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder="Márka" type="text" />
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder="Termék név" type="text" />
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder="Ár" type="number" />
            <textarea className='border border-tertiary-grey rounded text-base h-[140px] w-full pl-2 pt-2' placeholder="Termék leírás" ></textarea>
            <input onChange={handleInputFiles} className="mb-10" type="file" accept="image/* " multiple />
        </form>
        <div className='flex mb-10 gap-3 flex-wrap justify-center'>
        {files && files.map((file, index) => (
          <PhotoCard key={index} url={URL.createObjectURL(file)} handleDelete={handleDelete} />
        ))}
        </div>
        {error && 
          <div>
            {error}
          </div>
        }
        <div className='flex w-full gap-2 flex-col min-[702px]:flex-row items-center' >
            <button className=" w-1/2 text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Feltöltés</button>
            <Link className=" w-1/2 text-base font-medium text-white bg-secondary-grey rounded-[4px] px-2 py-1 text-center" href="/profile">Vissza</Link>
        </div>
    </div>
  )
}

export default Form