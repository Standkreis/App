import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import { getCreator } from './src/app/(userland)/stories/data/creators'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  creatorObject: {
    type: 'json',
    resolve: (doc) => getCreator(doc.creator),
  },
}

export const Story = defineDocumentType(() => ({
  name: 'Story',
  filePathPattern: `stories/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    category: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    creator: {
      type: 'string',
      required: false,
    },
    tags: {
      type: 'json',
      required: false,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Story],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
