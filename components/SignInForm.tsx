"use client"



import SignIn from "@/app/sign-in/page"
import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"
import {useRouter} from "next/navigation"



type Props = {}

const SignInForm = (props: Props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const handleGoogleSignIn = async (e: any) => {
    e.preventDefault()
    try {
      await signIn("google")
      router.push("/profile")
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await signIn("credentials",{
        email: email,
        password: password,
        redirect: false,
      })

      if(res?.error){
        setError("Hibás belépési azonosítók!")
        return
      }

      router.replace("/profile")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='min-[500px]:min-w-[500px] max-[500px]:w-full flex flex-col justify-center bg-secondary-bg md:my-40 my-28 h-[431px] p-4'>
        <div className='flex items-center h-[50px]'>
            <Link className='text-center text-secondary-blue font-medium border-b-[2px] border-secondary-blue p-2 w-1/2 shadow-md' href="/sign-in">Belépés</Link>
            <Link className='text-center text-secondary-grey font-medium border-b-[2px] border-primary-grey p-2 w-1/2' href="/register">Regisztráció</Link>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3">
            <h1 className="mt-5 font-medium">Belépés</h1>
            <input onChange={(e) => setEmail(e.target.value)} className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Email cím' required type="email" />
            <input onChange={(e) => setPassword(e.target.value)} className='border border-tertiary-grey rounded text-base h-[40px] w-full pl-2' placeholder='Jelszó' required type="password" />
            <div className="flex w-full items-baseline justify-between mt-10">
              <Link  className="text-secondary-blue" href="/sign-in">Elfelejtett jelszó</Link>
              <button className="h-[40px] w-1/5 bg-primary-orange rounded text-center text-white mb-8">Belépés</button>
            </div>
            {error && 
                    <div>
                        Hiba: {error}
                    </div>
                }
        </form>
        <button onClick={handleGoogleSignIn} className="h-[40px] w-full bg-white rounded text-center text-secondary-grey border-tertiary-grey border">Folytatás Google fiókkal</button>
    </div>
  )
}

export default SignInForm