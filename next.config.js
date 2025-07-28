/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Vercel için kaldırıldı
  images: {
    // unoptimized: true, // Vercel için kaldırıldı
    // loader: 'custom', // Vercel için kaldırıldı
    // loaderFile: './image-loader.js', // Vercel için kaldırıldı
  },
  trailingSlash: true,
  // distDir: 'out', // Vercel için kaldırıldı
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