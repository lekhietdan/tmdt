"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react"
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

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
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5" 
          : "bg-white/80 backdrop-blur-md border-b border-primary/10"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-22">
            {/* Logo */}
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group relative z-10"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 group-hover:scale-110">
                <Image
                  src="/lozgo.png"
                  alt="Chả Cá Cây Sang"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500">
                  Chả Cá Cây Sang
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Chất lượng cao cấp
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleScroll}
                    className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                      </>
                    )}
                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-3">
              <Link href="/shop" className="hidden md:block">
                <Button 
                  size="sm" 
                  className="relative overflow-hidden transition-all duration-300 gap-2 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group"
                >
                  <ShoppingBag className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold">Cửa Hàng</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 hover:bg-muted/80 rounded-xl transition-all duration-300 active:scale-95 relative z-10"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/98 backdrop-blur-xl z-50 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl border-l border-primary/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-primary/10">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/lozgo.png"
                  alt="Chả Cá Cây Sang"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">Chả Cá Cây Sang</span>
                <span className="text-xs text-muted-foreground">Menu</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-all duration-200"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleScroll}
                    style={{ animationDelay: `${index * 50}ms` }}
                    className={`block px-4 py-3.5 text-base font-semibold transition-all duration-300 rounded-xl relative overflow-hidden group ${
                      isActive
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {item.label}
                      {isActive && (
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                )
              })}
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-primary/10">
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              <Button size="lg" className="w-full transition-all duration-300 gap-2 hover:scale-[1.02] hover:shadow-lg">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-semibold">Cửa Hàng</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
