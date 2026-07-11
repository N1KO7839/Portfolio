import { NextResponse } from "next/server"
import { EMAIL_CONFIG, RATE_LIMIT } from "@/app/constants"
import { Resend } from "resend"
import { z } from "zod/v4"
import { contactEmailTemplate } from "./template"
import he from "he"

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error("Missing RESEND_API_KEY")
  return new Resend(key)
}
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please provide a valid email address.")
    .max(254),
  message: z.string().trim().min(1, "Message is required.").max(5000),
  website: z.string().optional(),
})

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs })
    return false
  }

  if (entry.count >= RATE_LIMIT.max) return true

  entry.count++
  return false
}

function isOriginAllowed(request: Request): boolean {
  const allowed = process.env.NEXT_PUBLIC_SITE_URL
  if (!allowed) return true
  return request.headers.get("origin") === allowed
}

function error(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request: Request) {
  if (!isOriginAllowed(request)) return error("Forbidden.", 403)
  if (isRateLimited(getClientIp(request)))
    return error("Too many requests. Please try again later.", 429)

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return error("Invalid JSON.", 400)
  }

  const result = contactSchema.safeParse(body)

  if (!result.success) {
    return error(result.error.issues[0].message, 400)
  }

  const { website, ...raw } = result.data
  if (website) return NextResponse.json({ data: { id: "honeypot" } })

  const safe = {
    name: he.encode(raw.name),
    email: he.encode(raw.email),
    message: he.encode(raw.message),
  }

  const { data: emailData, error: sendError } = await getResend().emails.send({
    ...EMAIL_CONFIG,
    replyTo: raw.email,
    subject: `New message from ${raw.name}`,
    html: contactEmailTemplate(safe),
  })

  if (sendError) return error(sendError.message, 500)

  return NextResponse.json({ data: emailData })
}
