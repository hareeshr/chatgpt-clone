/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.cdnlogo.com']
  }
}

module.exports = nextConfig
