"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

interface OrderSuccessModalProps {
  onClose: () => void
}

export function OrderSuccessModal({ onClose }: OrderSuccessModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <Card 
        className="w-full max-w-md relative hover-glow shadow-2xl animate-bounce-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-10 text-center">
          <div className="flex justify-center mb-6 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-soft"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center border-4 border-primary/30">
              <CheckCircle2 className="w-14 h-14 text-primary animate-scale-in" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-primary animate-pulse-soft" />
          </div>
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Đặt Hàng Thành Công!
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể để xác nhận đơn hàng.
          </p>
          <div className="space-y-3">
            <Button 
              onClick={onClose} 
              className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Đóng
            </Button>
            <p className="text-xs text-muted-foreground">
              Mã đơn hàng sẽ được gửi qua SMS trong vòng 5 phút
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

