

import UploadForm from '@/components/UploadForm'
import React from 'react'


type Props = {}

const UploadProduct = (props: Props) => {
  return (
    <section className="bg-primary-bg flex flex-col items-center justify-center ">
      <UploadForm/>
    </section>
  )
}

export default UploadProduct