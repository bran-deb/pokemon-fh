/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com']  //consume imgs from domain
  }
}

module.exports = nextConfig
