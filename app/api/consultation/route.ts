import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { createTransport, NOTIFY_EMAIL, FROM } from "@/lib/mailer"

const schema = z.object({
  name:      z.string().min(1).max(100),
  email:     z.string().email(),
  company:   z.string().min(1).max(100),
  phone:     z.string().optional(),
  message:   z.string().max(1000).optional(),
  timestamp: z.string(),
  source:    z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = createTransport()
      await transporter.sendMail({
        from:    FROM,
        to:      NOTIFY_EMAIL,
        replyTo: data.email,
        subject: `Strategy Session Request — ${data.name} at ${data.company}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #18181b;">
            <div style="background: #09090b; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #14b8a6; font-size: 18px; margin: 0; font-weight: 600;">New Strategy Session Request</h1>
            </div>
            <div style="background: #f4f4f5; padding: 32px; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #71717a; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${data.name}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #0d9488;">${data.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #71717a; font-size: 13px;">Company</td><td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${data.company}</td></tr>
                ${data.phone ? `<tr><td style="padding: 8px 0; color: #71717a; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${data.phone}</td></tr>` : ""}
                ${data.message ? `<tr><td colspan="2" style="padding: 16px 0 0;"><div style="background: white; border-radius: 8px; padding: 16px; font-size: 14px; color: #3f3f46; line-height: 1.6;">${data.message}</div></td></tr>` : ""}
              </table>
              <p style="margin: 24px 0 0; font-size: 12px; color: #a1a1aa;">Submitted ${new Date(data.timestamp).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT · bloomintelai.com</p>
            </div>
          </div>
        `,
      })
      console.log(`[Mail] consultation sent → ${NOTIFY_EMAIL}`)
    } else {
      console.log("[Mail] no GMAIL credentials set — skipping email:", {
        name: data.name, email: data.email, company: data.company,
      })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Consultation API error:", error)
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: "Validation error" }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: "Failed to send — please email us directly." }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
}
