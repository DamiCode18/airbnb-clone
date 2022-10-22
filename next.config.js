/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'images.unsplash.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
