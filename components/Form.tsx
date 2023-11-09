"use client"
import Link from 'next/link'
import React from 'react'


type Props = {}

const Form = (props: Props) => {
  return (
    <div className='bg-secondary-bg max-w-[702px] min-[702px]:w-[702px] flex my-10 p-10 rounded shadow-md  w-full'>
        <form >
            <input type="text" />
        </form>

        <button>Feltöltés</button>
        <Link href="/profile">Vissza</Link>
    </div>
  )
}

export default Form