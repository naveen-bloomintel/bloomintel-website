import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createTransport, NOTIFY_EMAIL, FROM } from "@/lib/mailer"

const schema = z.object({
  email: z.string().email(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = schema.parse(body)

    if (process.env.GMAIL_APP_PASSWORD) {
      const transporter = createTransport()
      await transporter.sendMail({
        from:    FROM,
        to:      NOTIFY_EMAIL,
        replyTo: email,
        subject: `New Intelligence Brief Subscriber — ${email}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 500px; color: #18181b;">
            <div style="background: #09090b; padding: 20px 28px; border-radius: 10px 10px 0 0;">
              <h1 style="color: #14b8a6; font-size: 16px; margin: 0; font-weight: 600;">New Intelligence Brief Subscriber</h1>
            </div>
            <div style="background: #f4f4f5; padding: 24px 28px; border-radius: 0 0 10px 10px;">
              <p style="margin: 0; font-size: 14px;">Someone signed up for the Intelligence Brief:</p>
              <p style="margin: 12px 0 0; font-size: 16px; font-weight: 600; color: #0d9488;">${email}</p>
              <p style="margin: 20px 0 0; font-size: 12px; color: #a1a1aa;">${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT · bloomintelai.com</p>
            </div>
          </div>
        `,
      })
      console.log(`[Mail] newsletter notification sent → ${NOTIFY_EMAIL}`)
    } else {
      console.log("[Mail] no GMAIL_APP_PASSWORD set — skipping email:", email)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Newsletter API error:", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
}
