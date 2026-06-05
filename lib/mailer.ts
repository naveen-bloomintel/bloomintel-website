import nodemailer from "nodemailer"

export const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "business@bloomintelai.com"
export const FROM         = `BloomIntel Website <${NOTIFY_EMAIL}>`

export function createTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NOTIFY_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}
