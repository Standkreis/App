const withPWA = require('next-pwa')({
  dest: 'public',
})
const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  trailingSlash: true,
}

module.exports = withPWA(withMDX(nextConfig))
