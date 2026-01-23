'use client'

import { useState, useEffect } from 'react'
import { Lock, RefreshCw, Trash2, ChevronDown, LogOut, Car, Users, Clock, CheckCircle } from 'lucide-react'

interface Inquiry {
  id: string
  name: string
  phone: string
  message: string
  status: '대기중' | '연락완료' | '상담완료'
  createdAt: string
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState<'all' | Inquiry['status']>('all')

  const authenticate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthenticated(true)
    fetchInquiries()
  }

  const fetchInquiries = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin', {
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          setIsAuthenticated(false)
          setError('비밀번호가 올바르지 않습니다.')
          return
        }
        throw new Error('데이터를 불러오는데 실패했습니다.')
      }

      const data = await response.json()
      setInquiries(data.inquiries)
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: Inquiry['status']) => {
    try {
      const response = await fetch('/api/admin', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${password}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      })

      if (!response.ok) throw new Error('상태 변경에 실패했습니다.')

      setInquiries(prev =>
        prev.map(inquiry =>
          inquiry.id === id ? { ...inquiry, status } : inquiry
        )
      )
    } catch (err) {
      alert(err instanceof Error ? err.message : '오류가 발생했습니다.')
    }
  }

  const deleteInquiry = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    try {
      const response = await fetch(`/api/admin?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      })

      if (!response.ok) throw new Error('삭제에 실패했습니다.')

      setInquiries(prev => prev.filter(inquiry => inquiry.id !== id))
    } catch (err) {
      alert(err instanceof Error ? err.message : '오류가 발생했습니다.')
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setPassword('')
    setInquiries([])
  }

  const filteredInquiries = filter === 'all'
    ? inquiries
    : inquiries.filter(i => i.status === filter)

  const getStatusColor = (status: Inquiry['status']) => {
    switch (status) {
      case '대기중':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case '연락완료':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case '상담완료':
        return 'bg-green-100 text-green-800 border-green-200'
    }
  }

  const stats = {
    total: inquiries.length,
    pending: inquiries.filter(i => i.status === '대기중').length,
    contacted: inquiries.filter(i => i.status === '연락완료').length,
    completed: inquiries.filter(i => i.status === '상담완료').length,
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">관리자 로그인</h1>
            <p className="text-gray-600 mt-2">올데이대리·탁송 어드민</p>
          </div>

          <form onSubmit={authenticate}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="관리자 비밀번호 입력"
                required
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-medium transition-colors"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">올데이대리·탁송</h1>
                <p className="text-xs text-gray-500">관리자 대시보드</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={fetchInquiries}
                disabled={loading}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">새로고침</span>
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">로그아웃</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Users className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                <p className="text-sm text-gray-500">전체 문의</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
                <p className="text-sm text-gray-500">대기중</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.contacted}</p>
                <p className="text-sm text-gray-500">연락완료</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
                <p className="text-sm text-gray-500">상담완료</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-xl border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-900">문의 목록</h2>
              <div className="flex gap-2">
                {(['all', '대기중', '연락완료', '상담완료'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === status
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {status === 'all' ? '전체' : status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
              <p className="text-gray-500">데이터를 불러오는 중...</p>
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">문의 내역이 없습니다.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      이름
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      연락처
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      상담문의
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      접수일시
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      관리
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="font-medium text-gray-900">{inquiry.name}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={`tel:${inquiry.phone}`}
                          className="text-primary-600 hover:text-primary-700"
                        >
                          {inquiry.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <p className="text-gray-600 truncate max-w-xs">
                          {inquiry.message || '-'}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative">
                          <select
                            value={inquiry.status}
                            onChange={(e) => updateStatus(inquiry.id, e.target.value as Inquiry['status'])}
                            className={`appearance-none pr-8 pl-3 py-1.5 rounded-full text-sm font-medium border cursor-pointer ${getStatusColor(inquiry.status)}`}
                          >
                            <option value="대기중">대기중</option>
                            <option value="연락완료">연락완료</option>
                            <option value="상담완료">상담완료</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                        {new Date(inquiry.createdAt).toLocaleString('ko-KR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => deleteInquiry(inquiry.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                          title="삭제"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
