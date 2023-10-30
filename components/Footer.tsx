import Image from 'next/image'
import Link from 'next/link'

import footer_logo from "@/public/assets/images/logos/logo_footer.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='w-full bg-primary-blue md:h-[252px] pt-5 absolute bottom-0'>
        <div className='max-w-5xl m-auto flex flex-col md:flex-row justify-between md:items-end text-tertiary-blue text-xs gap-10'>
            <div className='min-w-[231px] '>
                <div><Link href="/"><Image src={footer_logo} alt="media-catch-logo-footer"/></Link></div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex  gap-20 md:gap-40'>
                    <div>
                        <ul>
                            <li><Link href="/">Belépés</Link></li>
                            <li><Link href="/">Regisztráció</Link></li>
                            <li><Link href="/">Keresés</Link></li>
                            <li><Link href="/">Rólunk</Link></li>
                            <li><Link href="/">Hirdetésfeladás</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link href="/">Rólunk</Link></li>
                            <li><Link href="/">Hirdetésfeladás</Link></li>
                            <li><Link href="/">Adatvédelem</Link></li>
                            <li><Link href="/">Süti beállítások</Link></li>
                            <li><Link href="/">Süti kezelés</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='mb-10 md:mb-0'>
                    <p>Szerzői jogi védelem alatt álló oldal. A honlapon elhelyezett szöveges és képi anyagok, arculati és tartalmi elemek (pl. betűtípusok,
                        gombok, linkek, ikonok, szöveg, kép, grafika, logo stb.) felhasználása, másolása, terjesztése, továbbítása - akár részben, vagy
                        egészben - kizárólag a Jófogás előzetes, írásos beleegyezésével lehetséges.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer