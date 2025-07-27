import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Dynamic imports for heavy components to improve Core Web Vitals
export const ProductModal = dynamic(() => import('@/components/ui/ProductModal'), {
  loading: () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

export const WhyMarincool = dynamic(() => import('@/components/home/WhyMarincool'), {
  loading: () => (
    <section className="section-padding bg-gray-light">
      <div className="container">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-48 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
})

export const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false,
})

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    })

    observer.observe(ref)

    return () => observer.disconnect()
  }, [ref, options])

  return [setRef, isIntersecting] as const
}

// Image preloader utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Critical CSS inliner (for development)
export const CriticalCSS = () => (
  <style jsx global>{`
    /* Critical above-the-fold styles */
    body {
      margin: 0;
      font-family: 'Poppins', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .heading-1 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
    }
    
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    .btn-primary {
      background-color: #1e40af;
      color: white;
    }
    
    .btn-primary:hover {
      background-color: #1d4ed8;
      transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
      .heading-1 {
        font-size: 2rem;
      }
      
      .container {
        padding: 0 0.75rem;
      }
    }
  `}</style>
)

import { useState, useEffect } from 'react'