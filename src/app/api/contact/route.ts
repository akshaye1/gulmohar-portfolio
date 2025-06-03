import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Configure Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // App password (not your Gmail password)
      },
    });

    // Compose email
    const mailOptions = {
      from: `"Gulmohar Production" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Receive at your own address
      subject: `Contact Form: ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
      replyTo: data.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let message = "Invalid request";
    if (error instanceof Error) message = error.message;
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }
}
