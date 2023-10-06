import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-[40vh] min-h-[360px] w-[100%] overflow-hidden">
      <Image src="/images/hero.jpg" alt="hero" fill objectFit="cover" />
    </div>
  )
}

export default Hero
