/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    priority: true,
    formats: ['image/webp', 'image/avif'],
  },
  trailingSlash: true,
  distDir: 'out',
  basePath: '',
  assetPrefix: '',
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  swcMinify: true,
}