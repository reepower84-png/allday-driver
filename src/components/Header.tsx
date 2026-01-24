'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { id: 'home', label: '홈' },
  { id: 'services', label: '서비스' },
  { id: 'franchise', label: '창업안내' },
  { id: 'why-us', label: '왜 올데이대리?' },
  { id: 'recruitment', label: '기사 모집' },
  { id: 'contact', label: '기사님 호출하기' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/올데이대리_로고_2-removebg-preview.png"
              alt="올데이대리·탁송"
              width={280}
              height={80}
              className="h-20 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? activeSection === item.id
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                    : activeSection === item.id
                      ? 'text-accent-400'
                      : 'text-white hover:text-accent-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    isScrolled ? 'bg-primary-600' : 'bg-accent-400'
                  }`} />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
            >
              무료 상담
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="bg-white border-t shadow-lg">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-6 py-4 font-medium transition-colors border-b border-gray-100 ${
                activeSection === item.id
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="p-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-full font-medium transition-colors"
            >
              무료 상담 신청
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
