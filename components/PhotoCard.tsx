import React from 'react'
import Image from 'next/image'

type Props = {
    index: number,
    url: string,
    handleDeleteFile: any
}

const PhotoCard = ({index, url, handleDeleteFile}: Props) => {
  return (
    <div key={index}>
        <Image width={150} height={105} src={url} alt={"Image" + `${index}`}/>
        <button onClick={handleDeleteFile}>Delete</button>
    </div>
  )
}

export default PhotoCard