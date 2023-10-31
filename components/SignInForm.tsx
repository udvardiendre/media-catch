import Link from "next/link"



type Props = {}

const SignInForm = (props: Props) => {
  return (
    <div className='min-[500px]:min-w-[500px] max-[500px]:w-full flex flex-col justify-center bg-secondary-bg my-28 h-[431px] p-4'>
        <div className='flex items-center h-[50px]'>
            <Link className='text-center text-secondary-blue font-medium border-b-[2px] border-secondary-blue p-2 w-1/2 shadow-md' href="/sign-in">Belépés</Link>
            <Link className='text-center text-secondary-grey font-medium border-b-[2px] border-primary-grey p-2 w-1/2' href="/register">Regisztráció</Link>
        </div>
        <form className="flex flex-col items-start gap-3">
            <h1 className="mt-5 font-medium">Belépés</h1>
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Email cím' required type="email" />
            <input className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Jelszó' required type="password" />
            <div className="flex w-full items-baseline justify-between mt-10">
              <Link  className="text-secondary-blue" href="/sign-in">Elfelejtett jelszó</Link>
              <button className="h-[40px] w-1/5 bg-primary-orange rounded text-center text-white mb-8">Belépés</button>
            </div>
            <button className="h-[40px] w-full bg-white rounded text-center text-secondary-grey border-tertiary-grey border">Folytatás Google fiókkal</button>
        </form>
    </div>
  )
}

export default SignInForm