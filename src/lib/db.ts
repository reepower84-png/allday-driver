import { supabase } from './supabase'

export interface Inquiry {
  id: string
  name: string
  phone: string
  message: string
  status: '대기중' | '연락완료' | '상담완료'
  createdAt: string
}

interface SupabaseInquiry {
  id: number
  name: string
  phone: string
  message: string
  status: string
  created_at: string
}

function mapToInquiry(item: SupabaseInquiry): Inquiry {
  return {
    id: item.id.toString(),
    name: item.name,
    phone: item.phone,
    message: item.message || '',
    status: item.status as Inquiry['status'],
    createdAt: item.created_at,
  }
}

export async function getInquiries(): Promise<Inquiry[]> {
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching inquiries:', error)
    throw error
  }

  return (data || []).map(mapToInquiry)
}

export async function addInquiry(inquiry: Omit<Inquiry, 'id' | 'status' | 'createdAt'>): Promise<Inquiry> {
  const { data, error } = await supabase
    .from('inquiries')
    .insert({
      name: inquiry.name,
      phone: inquiry.phone,
      message: inquiry.message || '',
      status: '대기중',
    })
    .select()
    .single()

  if (error) {
    console.error('Error adding inquiry:', error)
    throw error
  }

  return mapToInquiry(data)
}

export async function updateInquiryStatus(id: string, status: Inquiry['status']): Promise<Inquiry | null> {
  const { data, error } = await supabase
    .from('inquiries')
    .update({ status })
    .eq('id', parseInt(id))
    .select()
    .single()

  if (error) {
    console.error('Error updating inquiry:', error)
    return null
  }

  return mapToInquiry(data)
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('inquiries')
    .delete()
    .eq('id', parseInt(id))

  if (error) {
    console.error('Error deleting inquiry:', error)
    return false
  }

  return true
}

export async function sendDiscordNotification(inquiry: Inquiry) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('Discord webhook URL is not configured')
    return
  }

  const embed = {
    title: '새로운 문의가 접수되었습니다!',
    color: 0x3b82f6,
    fields: [
      {
        name: '이름',
        value: inquiry.name,
        inline: true,
      },
      {
        name: '연락처',
        value: inquiry.phone,
        inline: true,
      },
      {
        name: '상담문의',
        value: inquiry.message || '(내용 없음)',
        inline: false,
      },
      {
        name: '접수시간',
        value: new Date(inquiry.createdAt).toLocaleString('ko-KR', {
          timeZone: 'Asia/Seoul',
        }),
        inline: true,
      },
    ],
    footer: {
      text: '올데이대리·탁송',
    },
    timestamp: inquiry.createdAt,
  }

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })
  } catch (error) {
    console.error('Failed to send Discord notification:', error)
  }
}
