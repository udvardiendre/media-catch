"use client"

import {useState} from "react"

import SignInForm from "@/components/SignInForm"



type Props = {}

const SignIn = (props: Props) => {

  const [formType, setFormType] = useState(false)

  return (
    <section className="bg-primary-bg flex justify-center">
      <SignInForm/>
    </section>
  )
}

export default SignIn