/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost:3000', 'images.unsplash.com', 'a0.muscache.com', 'cdn-icons-png.flaticon.com', 'links.papareact.com']
  },
  swcMinify: true,
}

module.exports = nextConfig
