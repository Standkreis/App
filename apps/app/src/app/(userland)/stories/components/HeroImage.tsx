'use client'

import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

type Props = {
  image: string
}

const HeroImage = (props: Props) => {
  const { image } = props

  return (
    <Container className="py-12">
      <div className="relative h-[400px] overflow-hidden rounded-lg shadow-sm">
        <Image
          src={image}
          alt={image}
          objectFit="cover"
          fill
          className="image transition ease-in-out"
        />
      </div>
    </Container>
  )
}

export default HeroImage
