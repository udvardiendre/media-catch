import React from 'react'
import Image from 'next/image'

type Props = {
    key: number,
    url: string,
    handleDeleteFile: any
}

const PhotoCard = ({key, url, handleDeleteFile}: Props) => {
  return (
    <div key={key}>
        <Image width={150} height={105} src={url} alt={"Image" + `${key}`}/>
        <button onClick={handleDeleteFile}>Delete</button>
    </div>
  )
}

export default PhotoCard