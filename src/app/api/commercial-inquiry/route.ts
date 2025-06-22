// app/api/commercial/route.ts
import { NextResponse, NextRequest } from "next/server";
import nodemailer, { SentMessageInfo } from "nodemailer";
import { generateCommercialEmailTemplate } from "../../utils/emailTemplates";

import { CommercialFormData } from "@/app/utils/types";
export async function POST(request: NextRequest) {
  try {
    const formData: CommercialFormData = await request.json();

    // Basic validation
    const {
      firstName,
      lastName,
      email,
      mobile,
      pickupLocation,
      officeAddress,
      officeStartTime,
      officeEndTime,
    } = formData;

    // Required field validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !pickupLocation ||
      !officeAddress ||
      !officeStartTime ||
      !officeEndTime
    ) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
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

    // Mobile validation (basic check for numbers and common formats)
    const mobileRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!mobileRegex.test(mobile.replace(/[\s\-\(\)]/g, ""))) {
      return NextResponse.json(
        { message: "Please provide a valid mobile number." },
        { status: 400 }
      );
    }

    // Time validation (basic HH:MM format)
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(officeStartTime) || !timeRegex.test(officeEndTime)) {
      return NextResponse.json(
        { message: "Please provide valid time format (HH:MM)." },
        { status: 400 }
      );
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587", 10),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Use with caution in production
      },
    });

    const emailHtml: string = generateCommercialEmailTemplate(formData);

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log(
        "SMTP connection verified successfully for commercial inquiry."
      );
    } catch (verifyError) {
      console.error(
        "SMTP connection verification failed for commercial inquiry:",
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
      from: `"${formData.firstName} ${formData.lastName}" <${process.env.EMAIL_USER}>`,
      replyTo: formData.email,
      to: "busbees1@gmail.com", // Your business email
      subject: `New Commercial Transportation Inquiry from ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    });

    console.log("Commercial inquiry email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Commercial transportation inquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting commercial inquiry:", error);

    let errorMessage =
      "An unexpected error occurred during commercial inquiry submission.";
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
    } else if (error.name === "ValidationError") {
      errorMessage =
        "Invalid form data. Please check all fields and try again.";
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
