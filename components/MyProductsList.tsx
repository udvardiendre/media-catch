import React from 'react'

type Props = {}

const MyProductsList = (props: Props) => {
  return (
    <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] w-full flex mt-5 p-5 flex-col items-center rounded shadow-md'>
        <h1>Product</h1>
        <div className='flex w-full gap-2 flex-col min-[702px]:flex-row items-center' >
            <button className=" w-1/2 text-base font-medium text-white bg-primary-orange rounded-[4px] px-2 py-1">Módosítás</button>
            <button className=" w-1/2 text-base font-medium text-white bg-primary-red rounded-[4px] px-2 py-1">Törlés</button>
        </div>
    </div>
  )
}

export default MyProductsList