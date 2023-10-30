import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import homepage_graph from "@/public/assets/images/homepage_pattern.svg"
import guitar from "@/public/assets/images/guitar.png"
import headphone from "@/public/assets/images/headphone.png"
import lamp from "@/public/assets/images/lamp.png"

type Props = {}

const Home = (props: Props) => {
  return (
    <section className='w-full'>
      <div className='w-full bg-primary-bg relative'>
        <Image className='absolute z-[1]' src={homepage_graph} alt="home-garph-svg" />
        <div className='max-w-5xl m-auto flex flex-col items-center pt-10'>
          <div>
            <h1 className='font-normal text-[28px]'>Hirdess vagy vásárolj a Médiafogáson!</h1>
          </div>
          <div className=' z-[2] flex gap-7 w-full h-[90px] bg-secondary-bg justify-center items-center mt-5 mb-20 rounded shadow'>
            <Link className="border-primary-orange border rounded text-medium text-primary-orange p-2 w-1/6 text-center" href="/">Hirdetésfeladás</Link>
            <div>|</div>
            <input className='pl-[10px] h-[42px] border border-black rounded w-4/6' type="text" placeholder='Mit keresel?'/>
          </div>
        </div>
      </div>
      <div className='w-full bg-secondary-bg'>
        <div className='max-w-5xl m-auto'>
          <div className='flex flex-col items-center gap-8 my-36'>
            <div className='flex gap-5'>
              <Image src={lamp} alt='lamp'/>
              <Image src={headphone} alt='headphone'/>
              <Image src={guitar} alt='guitar'/>
            </div>
            <div className='text-center'>
              <p>Felhasználói szabályzatunk 2023. 09. 07-én, Adatvédelmi tájékoztatónk pedig 2023. 09. 27-én megváltozott. Az új szabályzatokat a Felhasználói szabályzatés az Adatvédelmi szabályzat menüpontokban érheted el.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home