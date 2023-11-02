import '@/styles/globals.css'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'



export const metadata = {
  title: "Média Fogás",
  description: "Adja el termékeit online!"
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {


  // const session = await getServerSession()


  return (
    <html lang="hu">
        <body>
          <SessionProvider /*session={session}*/ >
                <main>
                  <Navbar/>
                    {children}
                  <Footer/>
                </main>
          </SessionProvider>
        </body>
    </html>
  )
}

export default RootLayout

