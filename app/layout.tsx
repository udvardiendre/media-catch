import '@/styles/globals.css'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'




export const metadata = {
  title: "Média Fogás",
  description: "Adja el termékeit online!"
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang="hu">
        <body>
                <main>
                  <Navbar/>
                    {children}
                  <Footer/>
                </main>
        </body>
    </html>
  )
}

export default RootLayout

