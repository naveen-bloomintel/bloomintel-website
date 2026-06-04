import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = schema.parse(body)

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const resend = new Resend(apiKey)
      const fromEmail = process.env.FROM_EMAIL ?? 'onboarding@resend.dev'
      const toEmail = process.env.NOTIFY_EMAIL ?? 'business@bloomintelai.com'

      await resend.emails.send({
        from: `BloomIntel <${fromEmail}>`,
        to: [toEmail],
        subject: `New Newsletter Subscriber — ${email}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 500px; color: #18181b;">
            <div style="background: #09090b; padding: 20px 28px; border-radius: 10px 10px 0 0;">
              <h1 style="color: #14b8a6; font-size: 16px; margin: 0; font-weight: 600;">New Intelligence Brief Subscriber</h1>
            </div>
            <div style="background: #f4f4f5; padding: 24px 28px; border-radius: 0 0 10px 10px;">
              <p style="margin: 0; font-size: 14px;">Someone signed up for the Intelligence Brief:</p>
              <p style="margin: 12px 0 0; font-size: 16px; font-weight: 600; color: #0d9488;">${email}</p>
              <p style="margin: 20px 0 0; font-size: 12px; color: #a1a1aa;">Submitted via bloomintelai.com · ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
            </div>
          </div>
        `,
      })
    } else {
      console.log('[BloomIntel] Newsletter signup (no RESEND_API_KEY set):', email)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Newsletter API error:', error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: 'Invalid email address' }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
}
