import Image from 'next/image'
import React from 'react'

type Props = {
  image: string
}

const Avatar = (props: Props) => {
  const { image } = props

  return (
    <Image
      src={image}
      alt="avatar"
      height={32}
      width={32}
      objectFit="fit"
      className="rounded-full border-2 border-[rgba(255,255,255,0.2)]"
    />
  )
}

export default Avatar
