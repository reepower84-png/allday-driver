import { NextRequest, NextResponse } from 'next/server'
import { addInquiry, sendDiscordNotification } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, message } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 연락처는 필수입니다.' },
        { status: 400 }
      )
    }

    const inquiry = await addInquiry({ name, phone, message })

    // Send Discord notification
    await sendDiscordNotification(inquiry)

    return NextResponse.json({ success: true, inquiry })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { error: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
