/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  trailingSlash: true,
}

module.exports = withPWA(withContentlayer(nextConfig))
