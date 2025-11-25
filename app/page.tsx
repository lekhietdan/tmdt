"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"

import { useState, useEffect, useRef } from "react"
import { ChevronRight, Phone, Mail, MapPin, Clock, ChefHat, UtensilsCrossed } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Chả Cá Cơm",
    description: "Chả cá truyền thống với cơm thơm, vị đặc trưng, độ mềm vừa phải.",
    price: "120.000đ/hộp",
    image: "/vietnamese-fish-cake-cha-ca-plate.jpg",
  },
  {
    id: 2,
    name: "Chả Cá Cụ",
    description: "Chả cá cụ lớn, thơm ngon, giàu dinh dưỡng, thích hợp cho gia đình.",
    price: "150.000đ/hộp",
    image: "/fresh-raw-fish-cake-ingredient.jpg",
  },
  {
    id: 3,
    name: "Chả Cá Nướng",
    description: "Chả cá nướng đặc biệt, vàng ươm, hương thơm hấp dẫn.",
    price: "180.000đ/hộp",
    image: "/fried-vietnamese-fish-cake.jpg",
  },
]

const recipes = [
  {
    id: 1,
    name: "Chả Cá Cuốn Bánh",
    description: "Cuốn chả cá với bánh tráng nóng, chấm nước mắm chuối, thêm rau sống tươi.",
    icon: "🌯",
    time: "15 phút",
    difficulty: "Dễ",
    steps: [
      "Chuẩn bị bánh tráng và nhúng qua nước ấm",
      "Đặt chả cá đã nướng lên bánh tráng",
      "Thêm rau sống, dưa leo, xà lách",
      "Cuốn lại và chấm với nước mắm chuối"
    ],
    image: "/vietnamese-fish-cake-cha-ca-plate.jpg"
  },
  {
    id: 2,
    name: "Chả Cá Chiên Giòn",
    description: "Chiên chả cá vàng ươm, ăn kèm với xôi nếp, tương ớt, cực ngon.",
    icon: "🍳",
    time: "20 phút",
    difficulty: "Dễ",
    steps: [
      "Làm nóng dầu trong chảo",
      "Chiên chả cá vàng đều 2 mặt",
      "Vớt ra để ráo dầu",
      "Ăn kèm với xôi nếp và tương ớt"
    ],
    image: "/fried-vietnamese-fish-cake.jpg"
  },
  {
    id: 3,
    name: "Chả Cá Nấu Canh",
    description: "Nấu chả cá trong nước dùng gà, thêm rau gấp, miến, thơm ngon bổ dưỡng.",
    icon: "🍲",
    time: "30 phút",
    difficulty: "Trung bình",
    steps: [
      "Nấu nước dùng gà sôi",
      "Thả chả cá vào nấu chín",
      "Thêm rau gấp và miến",
      "Nêm nếm vừa ăn và thưởng thức"
    ],
    image: "/steamed-fish-cake-banh-hap.jpg"
  },
  {
    id: 4,
    name: "Chả Cá Tào Phở",
    description: "Bỏ chả cá vào phở sáng tối, vừa có chất, vừa hấp dẫn hương vị.",
    icon: "🍜",
    time: "10 phút",
    difficulty: "Dễ",
    steps: [
      "Chuẩn bị bát phở nóng",
      "Thái chả cá thành lát mỏng",
      "Đặt chả cá lên trên phở",
      "Thêm hành lá, rau thơm và thưởng thức"
    ],
    image: "/vietnamese-ch--c--fish-cake-plate-with-herbs.jpg"
  },
]

const storyTimeline = [
  {
    year: "2004",
    title: "Khởi Đầu",
    desc: "Bắt đầu từ một quầy hàng nhỏ ở phố Cây Sang, Hà Nội. Với niềm đam mê và kinh nghiệm gia truyền, chúng tôi tạo ra những chả cá đầu tiên.",
  },
  {
    year: "2010",
    title: "Phát Triển",
    desc: "Mở rộng quy mô với cơ sở sản xuất hiện đại. Chả Cá Cây Sang trở nên nổi tiếng trong cộng đồng địa phương.",
  },
  {
    year: "2020",
    title: "Đổi Mới & Chứng Nhận OCOP",
    desc: "Giới thiệu dòng sản phẩm mới, cải tiến công thức truyền thống kết hợp kỹ thuật hiện đại. Đạt chứng nhận OCOP - tiêu chuẩn chất lượng quốc gia.",
  },
  {
    year: "Ngày Nay",
    title: "Hiện Tại",
    desc: "Với hơn 20 năm kinh nghiệm, Chả Cá Cây Sang phục vụ hàng ngàn khách hàng hạnh phúc mỗi ngày.",
  },
]

// About Carousel Component with Auto-play
function AboutCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const images = [
    "/traditional-vietnamese-fish-cake-preparation-in-ki.jpg",
    "/fresh-raw-fish-cake-ingredient.jpg",
    "/traditional-fish-cake-preparation-kitchen.jpg",
    "/vietnamese-fish-cake-cha-ca-plate.jpg",
    "/fried-vietnamese-fish-cake.jpg",
    "/steamed-fish-cake-banh-hap.jpg",
  ]

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div
      ref={carouselRef}
      className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group"
    >
      <div className="relative w-full h-full">
        <div
          className="flex transition-transform duration-700 ease-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-full h-full relative"
              style={{ width: '100%' }}
            >
              <img
                src={image}
                alt={`Giới thiệu thương hiệu ${idx + 1}`}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-white shadow-lg"
                  : "w-2 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Chuyển đến ảnh ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
          }}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Ảnh trước"
        >
          <ChevronRight className="w-5 h-5 text-primary rotate-180" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation()
            setCurrentIndex((prev) => (prev + 1) % images.length)
          }}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110"
          aria-label="Ảnh tiếp"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<Record<string, IntersectionObserver>>({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all elements with data-scroll-animate attribute
    const elementsToObserve = document.querySelectorAll("[data-scroll-animate]")
    elementsToObserve.forEach((el) => observer.observe(el))

    // Also check if contact section is already visible on load
    setTimeout(() => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleSections((prev) => {
            const newSet = new Set(prev)
            newSet.add("contact-heading")
            newSet.add("contact-info")
            newSet.add("contact-form")
            return newSet
          })
        }
      }
    }, 100)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <Navigation />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-amber-50/25 via-orange-50/20 to-red-50/15 flex items-center justify-center px-4 py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-96 h-96 bg-amber-200/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-up"></div>
          <div className="absolute bottom-32 left-10 w-96 h-96 bg-orange-200/12 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float-down"></div>
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-left"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/12 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-right"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 animate-bounce-in">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-soft"></div>
                  <div className="relative w-full h-full">
                    <Image
                      src="/lozgo.png"
                      alt="Chả Cá Cây Sang Logo"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                {/* OCOP Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg border-2 border-white/50 backdrop-blur-sm">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">★</span>
                  </div>
                  <span className="text-sm font-bold">Chứng Nhận OCOP</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-balance">
                  Chả Cá{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                      Cây Sang
                    </span>
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  <span className="font-semibold text-primary">Sản phẩm OCOP chất lượng cao</span>, được chế biến từ nguyên liệu tươi ngon với phương pháp truyền thống kết hợp kỹ
                  thuật hiện đại. <span className="font-semibold text-foreground">Thơm ngon, bổ dưỡng, tin tưởng được.</span>
                </p>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Chứng nhận OCOP</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>20+ năm kinh nghiệm</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto group relative overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Đặt Hàng Ngay
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Tìm Hiểu Thêm
                </Button>
              </div>
            </div>

            <div className="relative h-96 md:h-full animate-slide-right">
              <img
                src="/vietnamese-ch--c--fish-cake-plate-with-herbs.jpg"
                alt="Chả cá Cây Sang"
                className="w-full h-full object-cover rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-gradient-to-br from-amber-50/18 via-orange-50/15 to-red-50/12 relative overflow-hidden border-t border-primary/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-200/12 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-up"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-200/10 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float-down"></div>
          <div className="absolute top-1/2 right-10 w-80 h-80 bg-red-300/8 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-float-left"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div
              data-scroll-animate
              id="about-text"
              className={`transition-all duration-1000 ${visibleSections.has("about-text") ? "animate-slide-left" : "opacity-0"}`}
            >
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Câu Chuyện <span className="text-primary">Thương Hiệu</span>
                </h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Với <span className="font-semibold text-primary">hơn 20 năm kinh nghiệm</span>, Chả Cá Cây Sang tự hào là thương hiệu chả cá truyền thống chất lượng cao. Chúng tôi kết hợp những công thức gia truyền với các kỹ thuật chế biến hiện đại để tạo ra sản phẩm có hương vị đặc biệt và chất lượng vượt trội.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Mỗi sản phẩm đều được chuẩn bị cẩn thận, sử dụng nguyên liệu tươi ngon nhất và tuân thủ nghiêm ngặt tiêu chuẩn vệ sinh thực phẩm quốc tế. <span className="font-semibold text-foreground">Chất lượng là cam kết, hương vị là niềm tự hào.</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="text-sm font-semibold text-foreground">✓ Nguyên liệu tươi</span>
                </div>
                <div className="px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg">
                  <span className="text-sm font-semibold text-foreground">✓ An toàn vệ sinh</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                  <span className="text-sm font-semibold text-foreground">✓ Chất lượng cao</span>
                </div>
              </div>
            </div>

            <div
              data-scroll-animate
              id="about-image"
              className={`transition-all duration-1000 ${visibleSections.has("about-image") ? "animate-slide-right" : "opacity-0"}`}
            >
              <AboutCarousel />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "20+", title: "Năm Kinh Nghiệm" },
              { number: "5000+", title: "Khách Hàng Hài Lòng" },
              { number: "100%", title: "Chất Lượng Đảm Bảo" },
            ].map((stat, idx) => (
              <div
                key={idx}
                data-scroll-animate
                id={`stat-${idx}`}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-white via-amber-50/12 to-orange-50/10 backdrop-blur border-2 border-primary/20 hover:border-primary/40 hover-glow transition-all duration-1000 shadow-lg hover:shadow-xl ${
                  visibleSections.has(`stat-${idx}`) ? "animate-bounce-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="text-5xl font-bold text-primary mb-3 animate-pulse-soft">{stat.number}</div>
                <div className="text-foreground font-semibold text-lg">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-gradient-to-br from-amber-50/20 via-orange-50/20 to-red-50/12 relative overflow-hidden border-t border-primary/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float-up"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float-down"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-scroll-animate
            id="products-heading"
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("products-heading") ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-4">
                <span className="text-accent font-semibold text-sm">⭐ Sản Phẩm OCOP</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sản Phẩm Chả Cá Cây Sang</h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              <span className="font-semibold text-primary">Sản phẩm đạt chuẩn OCOP</span> - Ba loại chả cá chất lượng cao, được chế biến tỉ mỉ từ nguyên liệu tươi ngon để phục vụ mọi nhu cầu của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, idx) => (
              <div
                key={product.id}
                data-scroll-animate
                id={`product-${idx}`}
                className={`transition-all duration-1000 ${visibleSections.has(`product-${idx}`) ? "animate-slide-up" : "opacity-0"}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <Card className="overflow-hidden hover-glow h-full flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30">
                  <div className="h-64 overflow-hidden bg-gradient-soft-warm relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg border border-white/30">
                        ⭐ OCOP
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-lg">
                        Chất Lượng
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1">{product.description}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {product.price}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        className="transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        Đặt Hàng
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div
            data-scroll-animate
            id="view-more-btn"
            className={`text-center transition-all duration-1000 ${
              visibleSections.has("view-more-btn") ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <Link href="/shop">
              <Button size="lg" className="transition-smooth hover:scale-105 px-12">
                Xem Thêm Sản Phẩm
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <section id="story" className="py-24 bg-gradient-to-br from-amber-50/22 via-orange-50/20 to-red-50/15 relative overflow-hidden border-t border-primary/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-amber-200/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-up"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-200/12 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float-down"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-red-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-left"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-scroll-animate
            id="story-heading"
            className={`text-center mb-8 transition-all duration-1000 ${visibleSections.has("story-heading") ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="mb-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-3">
                <span className="text-accent font-semibold text-sm">📖 Câu Chuyện Thương Hiệu</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Câu Chuyện Chả Cá Cây Sang</h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Từ một quầy hàng nhỏ đến <span className="font-semibold text-primary">thương hiệu OCOP được tin yêu</span>, hành trình của chúng tôi là lịch sử của <span className="font-semibold text-accent">chất lượng</span> và
              <span className="font-semibold text-primary"> tình yêu</span>.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - only visible on desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 transform -translate-x-1/2"></div>

            <div className="space-y-6 md:space-y-8">
              {storyTimeline.map((item, idx) => (
                <div
                  key={idx}
                  data-scroll-animate
                  id={`timeline-${idx}`}
                  className={`relative transition-all duration-1000 ${visibleSections.has(`timeline-${idx}`) ? "animate-slide-up opacity-100" : "opacity-0"}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="md:grid md:grid-cols-2 gap-6 items-center relative">
                    {/* Timeline dot - visible only on desktop, positioned for each item */}
                    <div className="hidden md:flex md:justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-5 h-5 bg-primary rounded-full border-3 border-white animate-timeline-glow shadow-lg"></div>
                    </div>

                    {/* Content - alternates left and right on desktop */}
                    <div className={`${idx % 2 === 0 ? "md:pr-6" : "md:pl-6 md:col-start-2"}`}>
                      <div className="bg-gradient-to-br from-white via-amber-50/15 to-orange-50/10 border-2 border-primary/20 hover:border-primary/40 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {item.year}
                          </div>
                          {item.year === "2020" && (
                            <div className="px-2 py-1 bg-accent/20 border border-accent/30 rounded-full">
                              <span className="text-xs font-bold text-accent">OCOP</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    {idx % 2 === 0 && <div className="hidden md:block"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* OCOP CERTIFICATE SECTION */}
      <section id="ocop" className="py-24 bg-gradient-to-br from-amber-50/22 via-orange-50/20 to-red-50/15 relative overflow-hidden border-t border-primary/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-96 h-96 bg-amber-200/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-up"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/12 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float-down"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-scroll-animate
            id="ocop-heading"
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("ocop-heading") ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full mb-6 shadow-lg">
              <span className="text-lg">🏆</span>
              <span className="font-bold">Chứng Nhận OCOP 3 Sao</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Chứng Nhận <span className="text-primary">Chất Lượng Quốc Gia</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chả Cá Cây Sang tự hào đạt chứng nhận <span className="font-semibold text-primary">OCOP 3 Sao</span> - tiêu chuẩn chất lượng cao nhất của chương trình Mỗi xã một sản phẩm Việt Nam.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div
              data-scroll-animate
              id="ocop-certificate"
              className={`transition-all duration-1000 ${visibleSections.has("ocop-certificate") ? "animate-slide-left opacity-100" : "opacity-0"}`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white via-amber-50/12 to-orange-50/10 p-6 rounded-2xl border-4 border-accent/40 shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full mb-3 shadow-lg">
                      <span className="text-2xl">⭐</span>
                      <span className="font-bold text-base">OCOP 3 SAO</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-semibold">Giấy Chứng Nhận Chất Lượng</p>
                    <p className="text-xs text-muted-foreground mt-1">Ủy Ban Nhân Dân Thành Phố Đà Nẵng</p>
                  </div>
                  <div className="rounded-xl overflow-hidden border-2 border-primary/20 shadow-xl bg-white p-3">
                    <Image
                      src="/ocop.jpg"
                      alt="Chứng nhận OCOP 3 Sao - Chả Cá Cây Sang"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
                      priority
                      unoptimized
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      Quyết định số 4937/QĐ-UBND • Ngày 16/12/2020
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Có giá trị trong thời hạn 03 năm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-scroll-animate
              id="ocop-info"
              className={`space-y-6 transition-all duration-1000 ${visibleSections.has("ocop-info") ? "animate-slide-right" : "opacity-0"}`}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ý Nghĩa <span className="text-primary">Chứng Nhận OCOP</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Chứng nhận <span className="font-semibold text-primary">OCOP (One Commune One Product)</span> là chương trình quốc gia nhằm phát triển sản phẩm địa phương đạt tiêu chuẩn chất lượng cao.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary rounded-lg shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-accent text-xl">⭐</span>
                    Hạng 3 Sao - Chất Lượng Cao
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Sản phẩm đạt tiêu chuẩn chất lượng cao nhất, được đánh giá nghiêm ngặt về nguyên liệu, quy trình sản xuất và an toàn thực phẩm.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border-l-4 border-accent rounded-lg shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-primary text-xl">✓</span>
                    Đánh Giá Toàn Diện
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Sản phẩm được đánh giá về chất lượng, tính độc đáo, an toàn vệ sinh thực phẩm và khả năng phát triển thương mại.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary rounded-lg shadow-sm">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-accent text-xl">🏅</span>
                    Cam Kết Chất Lượng
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Chứng nhận OCOP là cam kết của chúng tôi về chất lượng sản phẩm, đảm bảo khách hàng nhận được sản phẩm tốt nhất.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-gradient-to-br from-white to-amber-50/40 border-2 border-primary/30 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-foreground">✓ Đạt chuẩn OCOP</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-br from-white to-orange-50/40 border-2 border-accent/30 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-foreground">✓ Hạng 3 Sao</span>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-br from-white to-red-50/30 border-2 border-primary/30 rounded-lg shadow-sm">
                    <span className="text-sm font-semibold text-foreground">✓ Chất lượng quốc gia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* RECIPES SECTION */}
      <section id="recipes" className="py-24 bg-gradient-to-br from-amber-50/20 via-orange-50/20 to-red-50/12 relative overflow-hidden border-t border-primary/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/12 rounded-full mix-blend-multiply filter blur-3xl opacity-18 animate-float-up"></div>
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-down"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-scroll-animate
            id="recipes-heading"
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("recipes-heading") ? "animate-slide-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Cách Chế Biến & Công Thức</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Những cách chế biến chả cá ngon, đơn giản, lành mạnh cho cả gia đình.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recipes.map((recipe, idx) => (
              <div
                key={idx}
                data-scroll-animate
                id={`recipe-${idx}`}
                className={`group rounded-2xl bg-gradient-to-br from-white via-amber-50/15 to-orange-50/10 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden ${
                  visibleSections.has(`recipe-${idx}`) ? "animate-rotate-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Recipe Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="text-4xl bg-white/20 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center border-2 border-white/30">
                      {recipe.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{recipe.name}</h3>
                    <div className="flex items-center gap-3 text-white/90 text-sm">
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        <ChefHat className="w-4 h-4" />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">{recipe.description}</p>
                  
                  {/* Steps */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <UtensilsCrossed className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">Các bước thực hiện:</span>
                    </div>
                    <ol className="space-y-2">
                      {recipe.steps.map((step, stepIdx) => (
                        <li key={stepIdx} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs">
                            {stepIdx + 1}
                          </span>
                          <span className="flex-1 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-br from-amber-50/20 via-orange-50/20 to-red-50/12 relative overflow-hidden border-t border-primary/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float-up"></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float-down"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            data-scroll-animate
            id="contact-heading"
            className={`text-center mb-16 transition-all duration-1000 ${visibleSections.has("contact-heading") ? "animate-slide-up opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Liên Hệ Với Chúng Tôi</h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              data-scroll-animate
              id="contact-info"
              className={`space-y-8 transition-all duration-1000 ${visibleSections.has("contact-info") ? "animate-slide-left opacity-100" : "opacity-0"}`}
            >
              <div className="space-y-6">
                {/* Địa chỉ 1 */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-br from-white via-amber-50/12 to-orange-50/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Địa Chỉ 1
                    </p>
                    <p className="text-lg text-foreground font-medium mb-2">87 - 89 Nguyễn Đức Trung, P.Thanh Khê Đông, Q.Thanh Khê, TP.Đà Nẵng</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href="tel:0917987656" className="text-base text-primary hover:text-primary/80 transition-colors font-medium">0917 987 656</a>
                      <span className="text-muted-foreground">-</span>
                      <a href="tel:0914168712" className="text-base text-primary hover:text-primary/80 transition-colors font-medium">0914 168 712</a>
                    </div>
                  </div>
                </div>

                {/* Địa chỉ 2 */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-br from-white via-amber-50/12 to-orange-50/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Địa Chỉ 2
                    </p>
                    <p className="text-lg text-foreground font-medium mb-2">269/39 Ông Ích Khiêm, Q. Hải Châu, TP. Đà Nẵng</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href="tel:0858757355" className="text-base text-primary hover:text-primary/80 transition-colors font-medium">0858 757 355</a>
                      <span className="text-muted-foreground">-</span>
                      <a href="tel:0766686600" className="text-base text-primary hover:text-primary/80 transition-colors font-medium">0766 686 600</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-gradient-to-br from-white via-amber-50/12 to-orange-50/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Email
                    </p>
                    <a href="mailto:chacacaysang@gmail.com" className="text-lg text-foreground font-medium hover:text-primary transition-colors">
                      chacacaysang@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-scroll-animate
              id="contact-form"
              className={`transition-all duration-1000 ${visibleSections.has("contact-form") ? "animate-slide-right opacity-100" : "opacity-0"}`}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tên của bạn *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-gradient-to-br from-white to-orange-50/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50 shadow-sm hover:shadow-md"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email của bạn *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-gradient-to-br from-white to-orange-50/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50 shadow-sm hover:shadow-md"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-gradient-to-br from-white to-orange-50/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50 shadow-sm hover:shadow-md"
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    name="message"
                    placeholder="Lời nhắn của bạn *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-gradient-to-br from-white to-amber-50/15 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 hover:border-primary/50 resize-none shadow-sm hover:shadow-md"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                  disabled={submitted}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {submitted ? (
                      <>
                        <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                        Đã Gửi Thành Công ✓
                      </>
                    ) : (
                      "Gửi Liên Hệ"
                    )}
                  </span>
                  {!submitted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

