'use client'

import { ChevronDown, Phone, Shield, Clock } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-accent-400" />
            <span className="text-white/90 text-sm font-medium">24시간 연중무휴 운영</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            술자리는 끝나도,<br />
            <span className="text-accent-400">안전</span>은 끝나지 않습니다
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
            24시간 올데이대리
          </p>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            전국 어디서나 빠르고 안전한 대리운전 & 탁송 서비스
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:1800-0238"
              className="group flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              1800-0238
            </a>
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium text-lg transition-all"
            >
              서비스 알아보기
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4">
              <Shield className="w-8 h-8 text-accent-400" />
              <div className="text-left">
                <p className="text-white font-semibold">안심 보험</p>
                <p className="text-white/60 text-sm">전 기사 보험 적용</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4">
              <Clock className="w-8 h-8 text-accent-400" />
              <div className="text-left">
                <p className="text-white font-semibold">빠른 배차</p>
                <p className="text-white/60 text-sm">평균 15분 내 배차</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4">
              <Phone className="w-8 h-8 text-accent-400" />
              <div className="text-left">
                <p className="text-white font-semibold">24시간</p>
                <p className="text-white/60 text-sm">연중무휴 운영</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  )
}
