'use client'

import { Rocket, Phone, TrendingUp, Headphones, FileText, Users, CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Phone,
    title: '전국대표번호 개통',
    description: '신뢰도 높은 전국대표번호를 개통해 드립니다.',
  },
  {
    icon: Headphones,
    title: '콜센터 운영 대행',
    description: '24시간 콜센터 운영을 당사에서 전담합니다.',
  },
  {
    icon: Users,
    title: '기사 배차 관리',
    description: '기사 모집부터 배차까지 모든 관리를 대행합니다.',
  },
  {
    icon: FileText,
    title: '정산 업무 처리',
    description: '복잡한 정산 업무도 당사에서 처리해 드립니다.',
  },
]

const steps = [
  { step: '01', title: '상담 신청', description: '무료 창업 상담 신청' },
  { step: '02', title: '계약 체결', description: '창업 조건 협의 및 계약' },
  { step: '03', title: '번호 개통', description: '전국대표번호 개통' },
  { step: '04', title: '홍보 시작', description: '지역 홍보 활동 시작' },
  { step: '05', title: '수익 창출', description: '매월 안정적인 수익' },
]

export default function Franchise() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="franchise" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-100 text-accent-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            대리운전 창업
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            홍보만 하세요,<br />
            <span className="text-primary-600">나머지는 저희가</span> 합니다
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            전국대표번호 개통 후 홍보만 하시면 됩니다.<br />
            콜센터 운영, 기사 배차, 정산까지 모든 업무를 당사에서 처리해 드립니다.
          </p>
        </div>

        {/* Main Highlight */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 mb-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-400 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-primary-900" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              수익률 <span className="text-accent-400">20%</span> 보장
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              초기 투자 비용 최소화, 운영 리스크 제로!<br />
              홍보 활동에만 집중하시면 안정적인 수익이 발생합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
                <p className="text-accent-400 font-bold text-lg">초기 비용 최소화</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
                <p className="text-accent-400 font-bold text-lg">운영 부담 제로</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
                <p className="text-accent-400 font-bold text-lg">안정적 수익</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Handle */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              당사에서 처리하는 업무
            </h3>
            <p className="text-gray-600">창업주님은 홍보에만 집중하세요</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              창업 절차
            </h3>
            <p className="text-gray-600">간단한 5단계로 창업을 시작하세요</p>
          </div>
          {/* Mobile: Vertical layout */}
          <div className="flex flex-col gap-3 md:hidden">
            {steps.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-900 font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: Horizontal layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-4">
            {steps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-white border-2 border-primary-200 rounded-2xl p-5 text-center min-w-[140px] hover:border-primary-400 transition-colors">
                  <p className="text-primary-600 font-bold text-sm mb-1">{item.step}</p>
                  <p className="text-gray-900 font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                왜 올데이대리와 함께해야 할까요?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">검증된 시스템</p>
                    <p className="text-gray-600 text-sm">오랜 운영 노하우로 검증된 콜센터 시스템 제공</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">전문 기사진 보유</p>
                    <p className="text-gray-600 text-sm">전국 500명 이상의 전문 기사진 네트워크</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">투명한 정산</p>
                    <p className="text-gray-600 text-sm">매월 정확하고 투명한 수익 정산</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">지속적인 지원</p>
                    <p className="text-gray-600 text-sm">창업 후에도 지속적인 운영 지원 및 컨설팅</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-8 h-8 text-accent-500" />
                <h4 className="text-xl font-bold text-gray-900">창업 문의</h4>
              </div>
              <p className="text-gray-600 mb-6">
                대리운전 창업에 관심이 있으시다면 지금 바로 무료 상담을 신청하세요.
                자세한 창업 조건과 수익 구조를 안내해 드립니다.
              </p>
              <button
                onClick={scrollToContact}
                className="w-full bg-accent-500 hover:bg-accent-600 text-gray-900 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02]"
              >
                무료 창업 상담 신청
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">지금 바로 대리운전 창업의 기회를 잡으세요</p>
          <button
            onClick={scrollToContact}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg"
          >
            창업 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  )
}
