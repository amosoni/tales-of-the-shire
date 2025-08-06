/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 禁用服务器端功能，因为这是静态导出
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig 