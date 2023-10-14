'use client'

import './hero.css'
import Button from '@/components/Button'
import Chip from '@/components/Chip'
import Container from '@/components/Container'
import CaretLeft from '@/components/Icons/CaretLeft'
import CaretRight from '@/components/Icons/CaretRight'
import Close from '@/components/Icons/Close'
import Moon from '@/components/Icons/Moon'
import Sun from '@/components/Icons/Sun'
import Zoom from '@/components/Icons/Zoom'
import { Name } from '@/data/ecosystem/plants/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  name: Name
  media: {
    icon: string
    hero: string
    images: string[]
  }
  tags: string[]
}

const Hero = (props: Props) => {
  const { name, media, tags } = props

  const [zoom, setZoom] = React.useState(false)
  const [slides, setSlides] = React.useState([media.hero])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (media.images.length > 0) {
      setSlides([...slides, ...media.images])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFullSize = () => {
    setZoom((prev) => !prev)
  }

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length)
    }
    setCurrentSlide((prev) => prev - 1)
  }

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  return (
    <>
      <Container className="relative max-w-5xl pt-4">
        <div
          className={`${
            zoom && 'zoomed'
          } bg-paper absolute h-[400px] w-full overflow-hidden rounded-xl p-4 shadow-sm transition md:p-6`}
        >
          {/* C O N T E N T */}
          <div className="relative z-20 flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="flex flex-1 flex-wrap gap-2 md:gap-4">
                {tags.map((tag) => (
                  <Chip key={tag} label={tag} />
                ))}
              </div>
              <Button
                color="light"
                className="!bg-[rgba(0,0,0,0.50)] hover:!bg-[rgba(0,0,0,0.75)]"
                onClick={onFullSize}
              >
                {zoom ? <Close /> : <Zoom />}
              </Button>
            </div>
            <div>
              <h5 className="mb-2 text-white opacity-70">{name.scientific}</h5>
              <h1 className="text-white">{name.common}</h1>
            </div>
          </div>

          {/* O V E R L A Y */}
          <div className="absolute left-0 top-0 z-10 h-[100%] w-[100%] bg-gradient-to-bl from-transparent to-black" />

          {/* N A V I G A T I O N */}
          <Button
            className="absolute left-6 top-[50%] z-20 -translate-y-1/2 !bg-[rgba(0,0,0,0.50)] hover:!bg-[rgba(0,0,0,0.75)]"
            opacity={50}
            color="light"
            onClick={prevSlide}
          >
            <CaretLeft />
          </Button>
          <Button
            className="absolute right-6 top-[50%] z-20 -translate-y-1/2 !bg-[rgba(0,0,0,0.50)] hover:!bg-[rgba(0,0,0,0.75)]"
            opacity={50}
            color="light"
            onClick={nextSlide}
          >
            <CaretRight />
          </Button>

          {/* I N D I C A T O R S */}
          <div className="absolute bottom-6 left-[50%] z-10 flex -translate-x-1/2 gap-4">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide

              return (
                <div
                  className={`h-3 w-3 rounded-full bg-white ${
                    isActive ? 'opacity-100' : 'opacity-25'
                  }`}
                  key={slide}
                />
              )
            })}
          </div>

          {/* S L I D E S */}
          <div
            className={`easy-in-out slide-container absolute left-0 top-0 flex h-[100%] w-[100%] transition-all`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide}
                className="relative h-[100%] w-[100%] min-w-full"
              >
                <Image
                  src={media.hero}
                  alt={name.common}
                  fill
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero
