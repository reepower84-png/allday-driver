'use client'

import { CheckCircle, Star, Award, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: Star,
    title: '신뢰할 수 있는 서비스',
    description: '검증된 전문 기사진과 철저한 서비스 관리로 믿고 맡기실 수 있습니다.',
  },
  {
    icon: Award,
    title: '합리적인 요금',
    description: '불필요한 추가 요금 없이 투명하고 합리적인 가격을 제공합니다.',
  },
  {
    icon: HeartHandshake,
    title: '고객 중심 서비스',
    description: '고객님의 편의를 최우선으로 생각하며, 친절한 서비스를 약속드립니다.',
  },
]

const stats = [
  { number: '10,000+', label: '누적 이용 건수' },
  { number: '98%', label: '고객 만족도' },
  { number: '500+', label: '전문 기사진' },
  { number: '24/7', label: '운영 시간' },
]

const testimonials = [
  {
    content: "늦은 시간에도 빠르게 와주셔서 안전하게 귀가할 수 있었습니다. 친절하고 안전한 운전 감사드립니다!",
    author: "서울 강남구 이용 고객님",
    rating: 5,
  },
  {
    content: "회식 후 매번 이용하는데, 항상 시간 약속을 잘 지켜주시고 운전도 안정적이에요. 강력 추천합니다!",
    author: "경기 수원시 이용 고객님",
    rating: 5,
  },
  {
    content: "탁송 서비스로 차량 인수했는데, 차 상태 그대로 안전하게 도착했습니다. 다음에도 또 이용할게요.",
    author: "인천 계양구 이용 고객님",
    rating: 5,
  },
  {
    content: "새벽 3시에 호출했는데도 15분 만에 도착! 덕분에 편하게 집에 왔습니다. 최고예요!",
    author: "서울 마포구 이용 고객님",
    rating: 5,
  },
  {
    content: "기사님이 정말 친절하시고, 차량 관리도 꼼꼼하게 해주셨어요. 믿고 맡길 수 있는 서비스입니다.",
    author: "부산 해운대구 이용 고객님",
    rating: 5,
  },
  {
    content: "장거리 탁송이었는데 중간중간 연락도 주시고, 예정 시간에 정확히 도착했습니다. 감사합니다!",
    author: "대전 서구 이용 고객님",
    rating: 5,
  },
]

export default function WhyUs() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="why-us" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-100 text-accent-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            왜 올데이대리인가요?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            지금 이 순간,<br />
            <span className="text-primary-600">가장 안전한 선택</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            올데이대리 | 24시간 대리운전
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border border-primary-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-600 rounded-xl mb-6 shadow-lg">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-primary-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              고객님들의 생생한 후기
            </h3>
            <p className="text-gray-600">실제 이용 고객님들의 소중한 리뷰입니다</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <p className="text-sm text-gray-500 font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">안전한 귀가, 지금 바로 시작하세요</p>
          <button
            onClick={scrollToContact}
            className="bg-accent-500 hover:bg-accent-600 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}
