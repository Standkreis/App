/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
})

const nextConfig = {
  trailingSlash: true,
}

module.exports = withPWA(nextConfig)
