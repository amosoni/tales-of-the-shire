/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  // 确保输出到 out 目录
  distDir: 'out'
}

module.exports = nextConfig 