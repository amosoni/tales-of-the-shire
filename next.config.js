/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除静态导出，使用标准Next.js构建
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig 