"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft } from "lucide-react"
import { OrderModal } from "@/components/order-modal"
import { OrderSuccessModal } from "@/components/order-success-modal"
import { Footer } from "@/components/footer"

const allProducts = [
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
  {
    id: 4,
    name: "Chả Cá Giá Sỉ",
    description: "Đặt hàng số lượng lớn, giá tốt nhất, đảm bảo chất lượng.",
    price: "100.000đ/hộp",
    image: "/steamed-fish-cake-banh-hap.jpg",
  },
  {
    id: 5,
    name: "Chả Cá Đặc Biệt",
    description: "Công thức bí mật gia truyền, hương vị tuyệt vời.",
    price: "200.000đ/hộp",
    image: "/traditional-vietnamese-fish-cake-preparation-in-ki.jpg",
  },
  {
    id: 6,
    name: "Chả Cá Combo",
    description: "Combo 3 loại chả cá, mix hương vị, siêu tiết kiệm.",
    price: "400.000đ/bộ",
    image: "/vietnamese-ch--c--fish-cake-plate-with-herbs.jpg",
  },
]

export default function ShopPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set<string>())

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredProducts(filtered)
  }, [searchTerm])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-scroll-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleOrderClick = (product: (typeof allProducts)[0]) => {
    setSelectedProduct(product)
    setShowOrderModal(true)
  }

  const handleOrderSuccess = () => {
    setShowOrderModal(false)
    setShowSuccessModal(true)
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    setSearchTerm("")
  }

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-amber-50/20 via-orange-50/20 to-red-50/12 pt-8 pb-16 relative overflow-hidden">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="group flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-full px-4 py-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Quay lại</span>
          </Button>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 right-1/3 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float-up"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float-down"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div
            data-scroll-animate
            id="shop-heading"
            className={`text-center mb-12 transition-all duration-1000 ${
              visibleSections.has("shop-heading") ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Cửa Hàng Chả Cá Cây Sang</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Khám phá bộ sưu tập đầy đủ các sản phẩm chả cá chất lượng cao
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-16">
            <div
              data-scroll-animate
              id="search-box"
              className={`transition-all duration-1000 ${
                visibleSections.has("search-box") ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg bg-gradient-to-br from-white to-amber-50/12 border-2 border-primary/20 hover:border-primary/40 focus:border-primary/50 transition-smooth rounded-xl shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  data-scroll-animate
                  id={`shop-product-${idx}`}
                  className={`transition-all duration-1000 ${
                    visibleSections.has(`shop-product-${idx}`) ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Card className="overflow-hidden hover-glow h-full flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-white via-amber-50/12 to-orange-50/10">
                    <div className="h-72 overflow-hidden bg-gradient-soft-warm relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
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
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-1 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {product.price}
                          </span>
                        </div>
                        <Button 
                          onClick={() => handleOrderClick(product)} 
                          className="transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground"
                        >
                          Đặt Ngay
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center shadow-lg">
                    <Search className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Không tìm thấy sản phẩm</h3>
                  <p className="text-muted-foreground mb-6">
                    Không có sản phẩm nào khớp với từ khóa <span className="font-semibold text-foreground">"{searchTerm}"</span>
                  </p>
                  <Button 
                    onClick={() => setSearchTerm("")} 
                    variant="outline" 
                    className="transition-all duration-300 hover:scale-105"
                  >
                    Xóa Bộ Lọc
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modals */}
        {showOrderModal && selectedProduct && (
          <OrderModal product={selectedProduct} onClose={() => setShowOrderModal(false)} onSuccess={handleOrderSuccess} />
        )}

        {showSuccessModal && <OrderSuccessModal onClose={handleSuccessClose} />}
      </main>
      <Footer />
    </>
  )
}

