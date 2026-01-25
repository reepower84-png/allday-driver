'use client'

import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/올데이대리_로고_2-removebg-preview.png"
                alt="올데이대리·탁송"
                width={280}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              24시간 전국 어디서나, 안전하고 신속한 대리운전과 탁송 서비스를 제공합니다.
              고객님의 안전한 귀가를 책임집니다.
            </p>
            <p className="text-accent-400 font-medium">
              &ldquo;술자리는 끝나도, 안전은 끝나지 않습니다.&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">바로가기</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  홈
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  왜 올데이대리?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('recruitment')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  기사 모집
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('franchise')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  창업안내
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  기사님 호출하기
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">기사님 호출</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="tel:1800-0238" className="text-accent-400 hover:text-accent-300 text-xl font-bold transition-colors">
                  1800-0238
                </a>
              </li>
              <li>24시간 상담 가능</li>
              <li>전국 어디서나 이용 가능</li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                >
                  상담 신청
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Company Info */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center md:text-left">
            <div className="text-gray-500 text-sm space-y-1 mb-4">
              <p>상호: 제이코리아 | 대표: 이주영</p>
              <p>사업자등록번호: 278-30-01540</p>
              <p>주소: 인천광역시 계양구 오조산로57번길 15, 7층 7106호</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} 올데이대리운전. All rights reserved.
              </p>
              <p className="text-gray-600 text-sm">
                Powered by 올데이대리·탁송
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
