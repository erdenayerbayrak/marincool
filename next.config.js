/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export için geri eklendi
  images: {
    unoptimized: true, // Static export için gerekli
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  trailingSlash: true,
  distDir: 'out', // Static export için gerekli
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
  
  // Video ve resim optimizasyonu için headers
  async headers() {
    return [
      {
        source: '/:all*(mp4|webm|ogg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(jpg|jpeg|gif|png|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}