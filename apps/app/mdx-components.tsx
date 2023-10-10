import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={
          {
            // OVERRIDES GOE HERE
          }
        }
      >
        {children}
      </h1>
    ),
    ...components,
  }
}
