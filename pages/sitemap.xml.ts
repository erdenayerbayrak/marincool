import { GetServerSideProps } from 'next'

// Statik sayfalar listesi
const staticPages = [
  '',
  '/tr',
  '/en',
  '/tr/hakkimizda',
  '/en/about',
  '/tr/urunlerimiz',
  '/en/products',
  '/tr/iletisim',
  '/en/contact',
]

// Ürün sayfaları
const productPages = [
  '/tr/urunlerimiz#vrf',
  '/tr/urunlerimiz#chiller',
  '/tr/urunlerimiz#monoblok',
  '/tr/urunlerimiz#multi',
  '/tr/urunlerimiz#split',
  '/en/products#vrf',
  '/en/products#chiller',
  '/en/products#monoblock',
]

function generateSiteMap() {
  const allPages = [...staticPages, ...productPages]
  
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${allPages
        .map((path) => {
          const url = `https://marincool.com${path}`
          const isHomePage = path === '' || path === '/tr' || path === '/en'
          const isProductDetail = path.includes('#')
          
          let priority = '0.7'
          let changefreq = 'monthly'
          
          if (isHomePage) {
            priority = '1.0'
            changefreq = 'weekly'
          } else if (path.includes('/urunlerimiz') || path.includes('/products')) {
            priority = '0.8'
            changefreq = 'monthly'
          } else if (isProductDetail) {
            priority = '0.6'
            changefreq = 'monthly'
          }
          
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
              ${path.includes('/tr/') ? `
              <xhtml:link 
                rel="alternate" 
                hreflang="en" 
                href="https://marincool.com${path.replace('/tr/', '/en/')}" />
              <xhtml:link 
                rel="alternate" 
                hreflang="tr" 
                href="https://marincool.com${path}" />
              ` : ''}
              ${path.includes('/en/') ? `
              <xhtml:link 
                rel="alternate" 
                hreflang="tr" 
                href="https://marincool.com${path.replace('/en/', '/tr/')}" />
              <xhtml:link 
                rel="alternate" 
                hreflang="en" 
                href="https://marincool.com${path}" />
              ` : ''}
            </url>`
        })
        .join('')}
    </urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}