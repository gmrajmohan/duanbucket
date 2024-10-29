/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },  
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
