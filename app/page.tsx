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
            <h1 className='font-normal text-[28px] pl-2'>Hirdess vagy vásárolj a Médiafogáson!</h1>
          </div>
          <div className='z-[2] flex max-[760px]:flex-col-reverse gap-3 min-[760px]:gap-7 w-full min-[500px]:w-[500px] min-[760px]:w-full h-[160px] min-[760px]:h-[90px] bg-secondary-bg justify-center items-center mt-5 mb-20 rounded shadow '>
          <Link href="/upload-product"><button className="border-primary-orange border rounded text-medium text-primary-orange p-2 min-w-[180px] min-[760px]:w-1/6 text-center hover:bg-primary-orange hover:text-white " >Hirdetésfeladás</button></Link>
            <div className='max-[760px]:hidden'>|</div>
            <input className='pl-[10px] h-[42px] border border-black rounded w-4/6' type="text" placeholder='Mit keresel?'/>
          </div>
        </div>
      </div>
      <div className='w-full bg-secondary-bg'>
        <div className='max-w-5xl m-auto'>
          <div className='flex flex-col items-center gap-8 my-10 min-[1025px]:my-36'>
            <div className='flex gap-5 flex-col min-[1025px]:flex-row text-white text-[24px] text-center'>
              <div className='relative'>
                <Image src={lamp} alt='lamp'/>
                <p className='absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2'>Állólámpák</p>
              </div>
              <div className='relative'>
                <Image src={headphone} alt='headphone'/>
                <p className='absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2'>Fejhallgatók</p>
              </div>
              <div className='relative'>
                <Image src={guitar} alt='guitar'/>
                <p className='absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2' >Hangszerek</p>
              </div>
            </div>
            <div className='text-center p-3'>
              <p>Felhasználói szabályzatunk 2023. 11. 29-én, Adatvédelmi tájékoztatónk pedig 2023. 11. 27-én megváltozott. Az új szabályzatokat a <a href='/assets/documents/felhasznaloi_szabalyzat.pdf' target="_blank" className='text-secondary-blue'>Felhasználói szabályzat</a> és az <a href='/assets/documents/adatvedelmi_szabalyzat.pdf' target="_blank"  className='text-secondary-blue'>Adatvédelmi szabályzat</a> menüpontokban érheted el.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home