"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  lang: "tr" | "en"
  className?: string
}

export function ModernNavBar({ items, lang, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Set active tab based on current path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const currentItem = items.find(item => item.url === currentPath)
      if (currentItem) {
        setActiveTab(currentItem.name)
      }
    }
  }, [items])

  // Close mobile menu when clicking outside and prevent body scroll when menu is open
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-nav-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscKey)
      // Prevent body scroll when menu is open - mobile specific
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
        document.body.style.width = '100%'
      }
    } else {
      // Restore body scroll when menu is closed - mobile specific
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
      // Restore scroll position on cleanup
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY) * -1)
        }
      }
    }
  }, [isMobileMenuOpen])


  return (
    <nav className="mobile-nav-container">
      {/* Main Navbar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm",
          className,
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Mobile Logo - Desktop ile Aynı Stil */}
            <div className="flex-shrink-0 lg:hidden">
              <Link href={`/${lang}`} className="bg-primary-navy px-1 py-1 rounded flex items-center h-10">
                <Image
                  src="/images/logo.png"
                  alt="Marincool Logo"
                  width={70}
                  height={18}
                  className="block"
                  style={{ width: 'auto' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Logo - Navbar Yüksekliğine Uygun */}
            <div className="flex-shrink-0 hidden lg:block">
              <Link href={`/${lang}`} className="bg-primary-navy px-1 py-1 rounded flex items-center h-12">
                <Image
                  src="/images/logo.png"
                  alt="Marincool Logo"
                  width={80}
                  height={20}
                  className="block"
                  style={{ width: 'auto' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <div className="flex items-baseline space-x-4">
                {items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveTab(item.name)
                        // Use router for navigation
                        window.location.href = item.url
                      }}
                      className={cn(
                        "text-gray-700 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-200",
                        isActive && "bg-primary-navy text-white",
                      )}
                    >
                      <Icon size={16} strokeWidth={2} />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/905515085085"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-accent-green text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="text-sm" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            {/* Mobile Right Section - Compact */}
            <div className="flex lg:hidden items-center space-x-2 flex-shrink-0">

              {/* Mobile WhatsApp Button - Compact */}
              <a
                href="https://wa.me/905515085085"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-accent-green text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                style={{ touchAction: 'manipulation' }}
              >
                <FaWhatsapp className="text-sm" />
              </a>

              {/* Mobile Menu Button - Compact */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }}
                className="w-8 h-8 bg-primary-navy text-white rounded-lg flex items-center justify-center hover:bg-primary-navy/90 transition-colors"
                style={{ touchAction: 'manipulation' }}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-4 h-4" />
                ) : (
                  <HiMenu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85%] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto gpu-accelerated"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="bg-primary-navy px-1 py-1 rounded flex items-center">
                    <Image
                      src="/images/logo.png"
                      alt="Marincool"
                      width={120}
                      height={30}
                      className="block"
                      style={{ width: 'auto' }}
                    />
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <HiX className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="px-6 space-y-2">
                    {items.map((item) => {
                      const Icon = item.icon
                      const isActive = activeTab === item.name

                      return (
                        <Link
                          key={item.name}
                          href={item.url}
                          onClick={(e) => {
                            e.preventDefault()
                            setActiveTab(item.name)
                            setIsMobileMenuOpen(false)
                            // Use direct navigation
                            window.location.href = item.url
                          }}
                          className={cn(
                            "flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-200 group",
                            isActive 
                              ? "bg-primary-navy text-white shadow-lg" 
                              : "text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                          )}
                          style={{ touchAction: 'manipulation' }}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                            isActive ? "bg-white/20" : "bg-gray-100 group-hover:bg-gray-200"
                          )}>
                            <Icon size={20} strokeWidth={2} className={isActive ? "text-white" : "text-gray-600"} />
                          </div>
                          <span className="text-lg font-medium">{item.name}</span>
                        </Link>
                      )
                    })}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <a
                    href="https://wa.me/905515085085"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-3 bg-accent-green text-white px-6 py-4 rounded-xl hover:bg-green-600 transition-colors w-full shadow-lg"
                    style={{ touchAction: 'manipulation' }}
                  >
                    <FaWhatsapp className="text-xl" />
                    <span className="text-lg font-medium">WhatsApp ile İletişim</span>
                  </a>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>© 2025 Marincool</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}