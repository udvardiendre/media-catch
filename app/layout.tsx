import '@/styles/globals.css'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'




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
          <Provider>
                <main>
                  <Navbar/>
                    {children}
                  <Footer/>
                </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout

