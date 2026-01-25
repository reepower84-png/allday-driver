import type { Metadata } from 'next'
import './globals.css'
import KakaoFloatingButton from '@/components/KakaoFloatingButton'

export const metadata: Metadata = {
  title: '올데이대리·탁송 | 24시간 대리운전 & 탁송 서비스',
  description: '전국 24시간 대리운전과 탁송 서비스를 제공합니다. 안전하고 신속한 서비스로 고객님의 소중한 차량을 책임집니다.',
  keywords: '대리운전, 탁송, 24시간, 전국, 올데이대리, 안전운전',
  openGraph: {
    title: '올데이대리·탁송 | 24시간 대리운전 & 탁송 서비스',
    description: '전국 24시간 대리운전과 탁송 서비스를 제공합니다.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="overflow-x-hidden">
      <body className="antialiased overflow-x-hidden max-w-full">
        {children}
        <KakaoFloatingButton />
      </body>
    </html>
  )
}
