/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  // 确保输出到.next目录
  distDir: '.next'
}

module.exports = nextConfig 