'use client'

import { Car, Truck, DollarSign, Clock, Shield, Smartphone, CheckCircle } from 'lucide-react'

const positions = [
  {
    icon: Car,
    title: '대리기사 모집',
    subtitle: '함께 성장할 대리기사님을 모십니다',
    description: '안정적인 수입과 자유로운 근무 환경을 제공합니다. 올데이대리와 함께 새로운 시작을 해보세요.',
    benefits: [
      '업계 최고 수준 수수료',
      '자유로운 출퇴근',
      '실시간 콜 배차',
      '전용 앱 지원',
    ],
    requirements: [
      '운전면허 1종 보통 이상',
      '운전 경력 2년 이상',
      '만 21세 이상',
      '책임감 있는 분',
    ],
    color: 'primary',
  },
  {
    icon: Truck,
    title: '탁송기사 모집',
    subtitle: '전문 탁송기사님을 모십니다',
    description: '전국 단위 탁송 서비스를 함께할 기사님을 찾습니다. 안정적인 물량과 좋은 조건을 약속드립니다.',
    benefits: [
      '고수익 장거리 탁송',
      '정기 물량 보장',
      '보험 완비',
      '정산 지원',
    ],
    requirements: [
      '운전면허 1종 보통 이상',
      '운전 경력 3년 이상',
      '장거리 운전 가능',
      '차량 관리 능력',
    ],
    color: 'accent',
  },
]

const advantages = [
  {
    icon: DollarSign,
    title: '높은 수익',
    description: '업계 최고 수준의 수수료율',
  },
  {
    icon: Clock,
    title: '자유로운 시간',
    description: '원하는 시간에 원하는 만큼',
  },
  {
    icon: Shield,
    title: '안전 보장',
    description: '종합보험 및 사고 지원',
  },
  {
    icon: Smartphone,
    title: '편리한 시스템',
    description: '전용 앱으로 쉬운 업무 관리',
  },
]

export default function Recruitment() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="recruitment" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            기사님 모집
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            올데이대리와 <span className="text-primary-600">함께하세요</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            안정적인 수입과 자유로운 근무 환경, 올데이대리에서 새로운 시작을 함께 해보세요.
          </p>
        </div>

        {/* Positions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${
                  position.color === 'primary' ? 'bg-primary-100' : 'bg-accent-100'
                }`}>
                  <position.icon className={`w-8 h-8 ${
                    position.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                  <p className="text-gray-500">{position.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8">{position.description}</p>

              {/* Benefits & Requirements */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      position.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
                    }`} />
                    혜택
                  </h4>
                  <ul className="space-y-2">
                    {position.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                          position.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                        }`} />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      position.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
                    }`} />
                    자격요건
                  </h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                          position.color === 'primary' ? 'text-primary-500' : 'text-accent-500'
                        }`} />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] ${
                  position.color === 'primary'
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-accent-500 hover:bg-accent-600 text-gray-900'
                }`}
              >
                지원 문의하기
              </button>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              올데이대리 기사님이 되면
            </h3>
            <p className="text-primary-200">올데이대리만의 특별한 혜택을 누리세요</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <advantage.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{advantage.title}</h4>
                <p className="text-primary-200 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">지금 바로 올데이대리 가족이 되어보세요</p>
          <button
            onClick={scrollToContact}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg"
          >
            기사 지원 문의하기
          </button>
        </div>
      </div>
    </section>
  )
}
