import { NextRequest, NextResponse } from 'next/server'

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

    // Send Discord notification directly
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('Discord webhook URL is not configured')
      return NextResponse.json(
        { error: '알림 설정이 되어있지 않습니다.' },
        { status: 500 }
      )
    }

    const now = new Date().toISOString()

    const embed = {
      title: '새로운 문의가 접수되었습니다!',
      color: 0x3b82f6,
      fields: [
        {
          name: '이름',
          value: name,
          inline: true,
        },
        {
          name: '연락처',
          value: phone,
          inline: true,
        },
        {
          name: '상담문의',
          value: message || '(내용 없음)',
          inline: false,
        },
        {
          name: '접수시간',
          value: new Date(now).toLocaleString('ko-KR', {
            timeZone: 'Asia/Seoul',
          }),
          inline: true,
        },
      ],
      footer: {
        text: '올데이대리·탁송',
      },
      timestamp: now,
    }

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    if (!discordResponse.ok) {
      console.error('Discord webhook failed:', discordResponse.status)
      return NextResponse.json(
        { error: '문의 접수 중 오류가 발생했습니다.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { error: '문의 접수 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
