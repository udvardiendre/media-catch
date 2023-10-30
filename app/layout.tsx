import '@/styles/globals.css'

import React from 'react'

export const metadata = {
  title: "Média Fogás",
  description: "Adja el termékeit online!"
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang="en">
        <body>
                <main>
                    {children}
                </main>
        </body>
    </html>
  )
}

export default RootLayout

