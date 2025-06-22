// app/api/email/route.ts
import { NextResponse, NextRequest } from "next/server";
import nodemailer, { SentMessageInfo } from "nodemailer";
import { generateContactEmailTemplate } from "../../utils/emailTemplates";

import { ContactFormData } from "@/app/utils/types";
export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Basic validation
    const { name, email, phone, subject, message } = formData;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Phone validation (basic check for numbers and common formats)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""))) {
      return NextResponse.json(
        { message: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com' or 'smtp.resend.com'
      port: parseInt(process.env.EMAIL_PORT || "587", 10), // e.g., 587 or 465
      secure: process.env.EMAIL_SECURE === "true", // Use 'true' for port 465, 'false' for 587
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
      tls: {
        rejectUnauthorized: false, // Use with caution in production
      },
    });

    const emailHtml: string = generateContactEmailTemplate(formData);

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully for contact form.");
    } catch (verifyError) {
      console.error(
        "SMTP connection verification failed for contact form:",
        verifyError
      );
      return NextResponse.json(
        {
          message: "Failed to connect to email server. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Send the email
    const info: SentMessageInfo = await transporter.sendMail({
      from: `"${formData.name}" <${process.env.EMAIL_USER}>`, // Your verified sender email address
      replyTo: formData.email, // So you can reply directly to the user
      to: "busbees1@gmail.com", // The recipient of the contact form (your business email)
      subject: `New Contact Form: ${formData.subject} from ${formData.name}`,
      html: emailHtml,
    });

    console.log("Contact form email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending contact form email:", error);

    let errorMessage = "Failed to send message. Please try again later.";
    let statusCode = 500;

    // Handle specific error types
    if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please contact support.";
      statusCode = 401;
    } else if (error.code === "ECONNECTION") {
      errorMessage =
        "Email service temporarily unavailable. Please try again later.";
      statusCode = 503;
    } else if (error.code === "ETIMEDOUT") {
      errorMessage =
        "Request timed out. Please check your connection and try again.";
      statusCode = 408;
    } else if (error.code === "EMESSAGE") {
      errorMessage =
        "Invalid message format. Please check your input and try again.";
      statusCode = 400;
    }

    return NextResponse.json(
      {
        message: errorMessage,
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: statusCode }
    );
  }
}

// Handle preflight CORS requests
export async function OPTIONS(request: NextRequest) {
  const allowedOrigin =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400", // 24 hours
    },
  });
}
