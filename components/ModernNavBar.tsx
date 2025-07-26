"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { LucideIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
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
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm",
        className,
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <div className="relative w-36 h-10">
              <Image
                src="/images/logo1.png"
                alt="Marincool Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200",
                    "text-gray-700 hover:text-primary-blue hover:bg-gray-50",
                    isActive && "bg-primary-navy text-white",
                  )}
                >
                  <Icon size={16} strokeWidth={2} />
                  <span className="text-sm font-medium">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-navy rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
              <Link
                href="/tr"
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all",
                  lang === "tr"
                    ? "bg-primary-navy text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                TR
              </Link>
              <Link
                href="/en"
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all",
                  lang === "en"
                    ? "bg-primary-navy text-white"
                    : "text-gray-600 hover:text-gray-800"
                )}
              >
                EN
              </Link>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/905515085085"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-accent-green text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-sm" />
              <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Items */}
          <div className="md:hidden flex items-center space-x-1">
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative p-2 rounded-full transition-all duration-200",
                    "text-gray-700 hover:text-primary-blue hover:bg-gray-50",
                    isActive && "bg-primary-navy text-white",
                  )}
                >
                  <Icon size={16} strokeWidth={2} />
                  {isActive && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute inset-0 bg-primary-navy rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}