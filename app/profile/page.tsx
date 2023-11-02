"use client"

import {signOut} from "next-auth/react"
import { useSession } from "next-auth/react"

type Props = {}

const Profile = (props: Props) => {
  const {data: session} = useSession()
  console.log(session)
  return (
    <section>
        <div>Product Card</div>
        
        <div><button onClick={() => signOut()}>Sign Out</button></div>
    </section>
  )
}

export default Profile