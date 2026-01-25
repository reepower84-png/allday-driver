'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Phone, User, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || '문의 접수에 실패했습니다.')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : '문의 접수에 실패했습니다.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              기사님 호출하기
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              지금 바로<br />
              <span className="text-accent-400">무료 상담</span> 받아보세요
            </h2>
            <p className="text-lg text-white/80 mb-8">
              간단한 정보만 남겨주시면, 빠르게 연락드리겠습니다.<br />
              24시간 언제든지 호출해 주세요.
            </p>

            {/* 안내 메시지 박스 */}
            <div className="space-y-4 mb-8">
              <div className="bg-accent-400 text-primary-900 rounded-2xl p-5 shadow-lg">
                <p className="text-lg font-bold flex items-center gap-2">
                  <span className="bg-primary-900 text-accent-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  기사님 호출이 필요하시면 전화 연락주세요 - 1800-0238
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl p-5">
                <p className="text-lg font-bold flex items-center gap-2">
                  <span className="bg-accent-400 text-primary-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  대리운전 창업이 필요하시면 무료 상담 신청하기에 이름과 연락처 상담문의를 남겨주세요
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <a href="tel:1800-0238" className="flex items-center gap-4 hover:bg-white/5 rounded-xl p-2 -ml-2 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">기사님 호출하기</p>
                  <p className="text-white font-semibold text-xl">1800-0238</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-white/60 text-sm">빠른 회신</p>
                  <p className="text-white font-semibold">접수 후 10분 내 연락</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">문의가 접수되었습니다!</h3>
                <p className="text-gray-600">빠른 시간 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="홍길동"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="010-1234-5678"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    상담문의
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="문의하실 내용을 입력해 주세요."
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      접수 중...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      무료 상담 신청하기
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  상담 신청 시 개인정보 수집 및 이용에 동의하게 됩니다.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
