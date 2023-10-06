import './card.css'

import React from 'react'
import { Story } from '../data/stories'
import Image from 'next/image'
import Link from 'next/link'
import Chip from '@/components/Chip'
import Calendar from '@/components/Icons/Calendar'
import Avatar from '@/components/Avatar'

const StoryCard = (props: Story) => {
  const { slug, title, description, image, publishedAt, creator, tags } = props
  console.log(creator)

  return (
    <div className="card bg-paper basis-1/3 overflow-hidden rounded-lg shadow-sm transition ease-in-out hover:-translate-y-1">
      <Link href={`/stories/${slug}`}>
        <div className="flex h-full flex-col">
          <div className="relative h-44 w-[100%] overflow-hidden">
            <Image
              src={image}
              alt={title}
              objectFit="cover"
              fill
              className="image transition ease-in-out"
            />
            <div className="absolute bottom-2 left-2 flex gap-2">
              {tags.map((tag) => (
                <Chip key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div className="items-between flex flex-grow flex-col justify-between p-4">
            <div>
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="text-hint flex items-center gap-1">
                <Calendar />
                <p className="text-hint">{publishedAt}</p>
              </div>
              <Avatar image={creator.avatar} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default StoryCard
