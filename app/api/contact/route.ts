import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Here you can:
    // 1. Send an email using Resend, SendGrid, etc.
    // 2. Save to a database
    // 3. Forward to your email

    console.log('Form submission:', { name, email, phone, subject, message })

    // For now, just return success
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}