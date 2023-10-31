import Link from "next/link"


type Props = {}

const RegisterForm = (props: Props) => {
  return (
    <div className='max-w-[500px] flex flex-col justify-center bg-secondary-bg my-10 h-[592px] p-4'>
        <div className='flex items-center h-[50px]'>
            <Link className='text-center text-secondary-grey font-medium border-b-[2px] border-primary-grey p-2 w-1/2' href="/sign-in">Belépés</Link>
            <Link className='text-center text-secondary-blue font-medium border-b-[2px] border-secondary-blue p-2 w-1/2 shadow-md' href="/register">Regisztráció</Link>
        </div>
        <form className="flex flex-col items-start gap-3">
            <h1 className="mt-5 font-medium">Regisztráció</h1>
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Email cím' required type="email" />
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Jelszó' required type="password" />
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Jelszó megerősítése' required type="password" />
            <label className="flex items-center gap-2 my-1">
                <input type="checkbox" />
                <span>Feliratkozom a Médiafogás hírlevelére, szeretnék személyre szabott
                ajánlatokat és promóciókat kapni! Hozzájárulok, hogy e-maileket
                kapjak az Adatvédelmi Tájékoztatónak megfelelően.</span>
            </label>
            <label className="flex items-center gap-2 my-1">
                <input type="checkbox" />
                <span>A Felhasználói szabályzatot és az Adatvédelmi tájékoztatót
                elolvastam és elfogadom.</span>
            </label>
            <button className="h-[40px] w-full bg-primary-orange rounded text-center text-white mb-8">Regisztráció</button>
            <button className="h-[40px] w-full bg-white rounded text-center text-secondary-grey border-tertiary-grey border">Folytatás Google fiókkal</button>
        </form>
    </div>
  )
}

export default RegisterForm