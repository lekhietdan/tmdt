"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: "#home", label: "Trang Chủ" },
    { href: "#about", label: "Giới Thiệu" },
    { href: "#products", label: "Sản Phẩm" },
    { href: "#story", label: "Câu Chuyện" },
    { href: "#ocop", label: "Chứng Nhận OCOP" },
    { href: "#recipes", label: "Chế Biến" },
    { href: "#contact", label: "Liên Hệ" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (!href) return

    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gradient-to-r from-amber-50/95 via-orange-50/95 to-red-50/90 backdrop-blur-md border-b border-primary/20 shadow-lg" 
        : "bg-gradient-to-r from-amber-50/90 via-orange-50/90 to-red-50/85 backdrop-blur-sm border-b border-primary/10"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <Link
            href="#home"
            onClick={handleScroll}
            className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.jpg"
                alt="Chả Cá Cây Sang"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Chả Cá Cây Sang
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleScroll}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  )}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/shop" className="hidden md:block">
              <Button 
                size="sm" 
                className="transition-all duration-300 gap-2 hover:scale-105 hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                Cửa Hàng
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleScroll}
                  className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
            <Link href="/shop" className="block mt-2">
              <Button size="sm" className="w-full transition-smooth gap-2">
                <ShoppingBag className="w-4 h-4" />
                Cửa Hàng
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
