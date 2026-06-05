import nodemailer from "nodemailer"

export function createTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "business@bloomintelai.com"
export const FROM         = `BloomIntel Website <${process.env.GMAIL_USER}>`
