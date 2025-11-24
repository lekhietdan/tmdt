import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white mt-16 border-t-4 border-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <Image
                  src="/logo.jpg"
                  alt="Chả Cá Cây Sang"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-xl text-white">Chả Cá Cây Sang</h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Chả cá truyền thống <span className="font-semibold text-accent">chứng nhận OCOP</span>, được chế biến với tâm huyết và sự tận tâm. <span className="font-semibold">20+ năm kinh nghiệm</span>.
            </p>
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Đang mở cửa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link href="#recipes" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                  Gợi Ý Chế Biến
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-white transition-colors"></span>
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Thông Tin Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Địa Chỉ</p>
                  <p className="text-white/90 text-sm leading-relaxed">123 Phố Vàng, Hà Nội, Việt Nam</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Điện Thoại</p>
                  <a href="tel:0912345678" className="text-white/90 text-sm hover:text-white transition-colors">
                    0912 345 678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:info@chacaycasang.com" className="text-white/90 text-sm hover:text-white transition-colors">
                    info@chacaycasang.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Theo Dõi Chúng Tôi</h4>
            <p className="text-white/70 text-sm mb-5">
              Cập nhật tin tức và ưu đãi mới nhất
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">Chả Cá Cây Sang</span>. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

