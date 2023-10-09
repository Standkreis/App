'use client'

import Container from '@/components/Container'
import Calendar from '@/components/Icons/Calendar'
import Page from '@/components/Page'
import React from 'react'
import Image from 'next/image'
import Avatar from '@/components/Avatar'
import ScrollToTop from '@/components/ScrollToTop'
import { allStories } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'
import { formatDate } from '@/utils/formatDate'

const StoryDetails = ({ params }: { params: { slug: string } }) => {
  const story = allStories.filter(
    (story) => story.slug === '/stories/' + params.slug
  )[0]

  console.log(story)

  return (
    <Page>
      <ScrollToTop />
      <Container className="py-6 sm:py-12">
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-sm">
          <Image
            src={story.image || '/images/placeholder.jpg'}
            alt={story.title}
            objectFit="cover"
            fill
            className="image transition ease-in-out"
          />
        </div>
      </Container>
      <Container className="max-w-3xl pb-24 pt-6">
        <div>
          <div className="mb-4 flex justify-between">
            <div className="text-hint flex items-center gap-1">
              <Calendar />
              <p className="text-paragraph">{formatDate(story.date)}</p>
            </div>
            {story.creatorObject && (
              <div className="text-hint flex items-center gap-2">
                <p className="text-paragraph">{story.creatorObject.name}</p>
                <Avatar image={story.creatorObject.avatar} />
              </div>
            )}
          </div>
        </div>
        <h1 className="mb-2">{story?.title}</h1>
        <p className="text">{story?.description}</p>
        <hr className="my-6" />
        <Mdx code={story?.body.code} />
      </Container>
    </Page>
  )
}

export default StoryDetails
