'use client'

import Image from 'next/image'

export default function KakaoFloatingButton() {
  return (
    <a
      href="http://pf.kakao.com/_Uugxlj/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
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
  )
}
