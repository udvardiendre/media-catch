import React from 'react'
import Image from 'next/image'

type Props = {
    key: number,
    url: string,
    handleDelete: any
}

const PhotoCard = ({key, url, handleDelete}: Props) => {
  return (
    <div key={key}>
        <Image width={150} height={105} src={url} alt={"Image" + `${key}`}/>
    </div>
  )
}

export default PhotoCard