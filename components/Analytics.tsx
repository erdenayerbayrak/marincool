import Script from 'next/script'

// Google Analytics 4 component
export function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Google Search Console verification
export function GoogleSearchConsole() {
  return (
    <meta 
      name="google-site-verification" 
      content="your-google-search-console-verification-code" 
    />
  )
}

// Structured Data for Homepage
export function HomepageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://marincool.com/#organization",
        "name": "Marincool",
        "url": "https://marincool.com",
        "sameAs": [
          "https://www.instagram.com/marincool.com.tr/"
        ],
        "logo": {
          "@type": "ImageObject",
          "@id": "https://marincool.com/#logo",
          "inLanguage": "tr-TR",
          "url": "https://marincool.com/images/marincool-logo.png",
          "contentUrl": "https://marincool.com/images/marincool-logo.png",
          "width": 200,
          "height": 60,
          "caption": "Marincool"
        },
        "image": {
          "@id": "https://marincool.com/#logo"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://marincool.com/#website",
        "url": "https://marincool.com",
        "name": "Marincool - Marin Klima Sistemleri",
        "description": "Türkiye'nin lider marin klima sistemleri uzmanı",
        "publisher": {
          "@id": "https://marincool.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://marincool.com/tr/urunlerimiz?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "tr-TR"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://marincool.com/#localbusiness",
        "name": "Marincool",
        "image": "https://marincool.com/images/marincool-logo.png",
        "@id": "https://marincool.com",
        "url": "https://marincool.com",
        "telephone": "+90-551-508-50-85",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Merkez, Cengiz Topel Cd. No:82/A",
          "addressLocality": "Dalaman",
          "addressRegion": "Muğla",
          "postalCode": "48770",
          "addressCountry": "TR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 36.7666666,
          "longitude": 28.7777777
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday", 
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/marincool.com.tr/"
        ]
      }
    ]
  }

  return (
    <Script
      id="homepage-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}