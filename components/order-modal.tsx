"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Plus, Minus, User, Phone, MapPin } from "lucide-react"

interface OrderModalProps {
  product: {
    id: number
    name: string
    price: string
    description: string
  }
  onClose: () => void
  onSuccess: () => void
}

export function OrderModal({ product, onClose, onSuccess }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validatePhone = (phone: string) => {
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = "Vui lòng nhập tên"
    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ"
    }
    if (!address.trim()) newErrors.address = "Vui lòng nhập địa chỉ"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    onSuccess()
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  const priceValue = Number.parseInt(product.price.replace(/[^\d]/g, ""))
  const total = (priceValue * quantity).toLocaleString("vi-VN")

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <Card 
        className="w-full max-w-md relative hover-glow shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Đặt Hàng
            </h2>
            <p className="text-muted-foreground font-medium">{product.name}</p>
          </div>

          <form onSubmit={handleOrder} className="space-y-5">
            {/* Quantity */}
            <div>
              <label className="text-sm font-semibold mb-3 block text-foreground">Số Lượng (hộp)</label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="p-2 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="text-center text-lg font-semibold w-20 transition-smooth"
                />
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="p-2 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="text-sm font-semibold mb-2 block text-foreground flex items-center gap-2">
                <User className="w-4 h-4" />
                Tên Khách Hàng
              </label>
              <Input
                type="text"
                placeholder="Nhập tên của bạn"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (errors.name) setErrors((prev) => ({ ...prev, name: "" }))
                }}
                className={`transition-smooth ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-semibold mb-2 block text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Số Điện Thoại
              </label>
              <Input
                type="tel"
                placeholder="0912345678"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }))
                }}
                className={`transition-smooth ${errors.phone ? "border-destructive" : ""}`}
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-semibold mb-2 block text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Địa Chỉ Giao Hàng
              </label>
              <Input
                type="text"
                placeholder="Nhập địa chỉ giao hàng"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                  if (errors.address) setErrors((prev) => ({ ...prev, address: "" }))
                }}
                className={`transition-smooth ${errors.address ? "border-destructive" : ""}`}
              />
              {errors.address && <p className="text-sm text-destructive mt-1">{errors.address}</p>}
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-5 rounded-xl border border-primary/20">
              <div className="flex justify-between items-center mb-3">
                <span className="text-muted-foreground">Đơn giá:</span>
                <span className="font-semibold text-foreground">{product.price}</span>
              </div>
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-border">
                <span className="text-muted-foreground">Số lượng:</span>
                <span className="font-semibold text-foreground">{quantity} hộp</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-primary">
                <span>Tổng Cộng:</span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {total}đ
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 transition-all duration-300 hover:scale-105"
                disabled={loading}
              >
                Hủy
              </Button>
              <Button 
                type="submit" 
                disabled={loading} 
                className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                    Đang Xử Lý...
                  </span>
                ) : (
                  "Xác Nhận Đặt Hàng"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

