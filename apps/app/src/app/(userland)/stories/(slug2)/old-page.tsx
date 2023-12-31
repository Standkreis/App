'use client'

import Container from '@/components/Container'
import Calendar from '@/components/Icons/Calendar'
import Page from '@/components/Page'
import React from 'react'
import { STORIES } from '../data/stories'
import Image from 'next/image'
import Avatar from '@/components/Avatar'
import ScrollToTop from '@/components/ScrollToTop'

const StoryDetails = ({ params }: { params: { slug: string } }) => {
  const story = STORIES.filter((story) => story.slug === params.slug)[0]

  return (
    <Page>
      <ScrollToTop />
      <Container className="py-12">
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-sm">
          <Image
            src={story.image}
            alt={story.title}
            objectFit="cover"
            fill
            className="image transition ease-in-out"
          />
        </div>
      </Container>
      <Container className="max-w-3xl">
        <div>
          <div className="mb-4 flex justify-between">
            <div className="text-hint flex items-center gap-1">
              <Calendar />
              <p className="text-paragraph">{story.publishedAt}</p>
            </div>
            <div className="text-hint flex items-center gap-2">
              <p className="text-paragraph">{story.creator.name}</p>
              <Avatar image={story.creator.avatar} />
            </div>
          </div>
        </div>
        <h1 className="mb-2">{story.title}</h1>
        <p className="text">{story.description}</p>
      </Container>
    </Page>
  )
}

export default StoryDetails
