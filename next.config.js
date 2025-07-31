/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 禁用Turbopack以避免运行时错误
    turbo: false,
  },
  eslint: {
    // 在开发时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 在开发时忽略TypeScript错误
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 