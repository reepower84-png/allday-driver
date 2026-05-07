'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function KakaoFloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-center gap-3">
      <a
        href="tel:1800-0238"
        className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-green-500 hover:bg-green-600 flex items-center justify-center"
        aria-label="1800-0238 전화 연결"
      >
        <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" />
      </a>
      <a
        href="http://pf.kakao.com/_Uugxlj/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="카카오톡 상담"
      >
        <Image
          src="/카톡_원형_로고.png"
          alt="카카오톡 상담"
          width={64}
          height={64}
          className="w-full h-full rounded-full"
        />
      </a>
    </div>
  )
}
