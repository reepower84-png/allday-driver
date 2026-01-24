'use client'

import { Car, Truck, MapPin, Clock, Shield, Users } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: '대리운전',
    description: '음주 후나 피곤할 때, 전문 기사가 안전하게 목적지까지 모셔다 드립니다.',
    features: ['24시간 운영', '전국 어디서나', '신속한 배차', '일일기사', '법인기사', '고정기사'],
  },
  {
    icon: Truck,
    title: '탁송 서비스',
    description: '차량 구매, 정비, 이전 등 필요한 곳으로 안전하게 차량을 운송해 드립니다.',
    features: ['장거리 탁송', '당일 배송', '보험 적용'],
  },
]

const features = [
  {
    icon: Clock,
    title: '24시간 운영',
    description: '새벽이든 심야든, 언제나 대기하고 있습니다.',
  },
  {
    icon: MapPin,
    title: '전국 서비스',
    description: '전국 어디서나 호출 한 번으로 이용 가능합니다.',
  },
  {
    icon: Shield,
    title: '안전 보장',
    description: '모든 운행에 보험이 적용되어 안심할 수 있습니다.',
  },
  {
    icon: Users,
    title: '전문 기사진',
    description: '철저한 교육을 받은 전문 기사가 운행합니다.',
  },
]

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            서비스 안내
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            오늘도 무사히, <span className="text-primary-600">올데이대리</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            대리운전부터 탁송까지, 차량 이동에 필요한 모든 서비스를 제공합니다.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <button
                onClick={scrollToContact}
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center gap-1"
              >
                기사님 호출하기 →
              </button>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-accent-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={scrollToContact}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg"
          >
            지금 바로 상담받기
          </button>
        </div>
      </div>
    </section>
  )
}
