// app/api/student-inquiry/route.ts
import { NextResponse, NextRequest } from "next/server";
import nodemailer, { SentMessageInfo } from "nodemailer";
import { generateStudentEmailTemplate } from "../../utils/emailTemplates";
import { StudentFormData } from "@/app/utils/types";
export async function POST(request: NextRequest) {
  try {
    const formData: StudentFormData = await request.json();

    // Basic validation
    const {
      firstName,
      lastName,
      email,
      mobile,
      schoolName,
      schoolStartTime,
      schoolEndTime,
      pickupLocation,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !schoolName ||
      !schoolStartTime ||
      !schoolEndTime ||
      !pickupLocation
    ) {
      return NextResponse.json(
        { message: "All required fields are missing for student inquiry." },
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
        rejectUnauthorized: false, // Use with caution
      },
    });

    const emailHtml: string = generateStudentEmailTemplate(formData);

    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully for student inquiry.");
    } catch (verifyError) {
      console.error(
        "SMTP connection verification failed for student inquiry:",
        verifyError
      );
      return NextResponse.json(
        { message: "Failed to connect to email server for student inquiry." },
        { status: 500 }
      );
    }

    const info: SentMessageInfo = await transporter.sendMail({
      from: `"${formData.firstName} ${formData.lastName}" <${process.env.EMAIL_USER}>`,
      replyTo: formData.email,
      to: "busbees1@gmail.com", // Your business email
      subject: `New School Bus Service Inquiry from ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
    });

    console.log("Student inquiry email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "School bus inquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting student inquiry:", error);

    let errorMessage =
      "An unexpected error occurred during student inquiry submission.";
    let statusCode = 500;

    if (error.code === "EAUTH") {
      errorMessage =
        "Authentication failed for email service. Please check environment variables.";
      statusCode = 401;
    } else if (error.code === "ECONNECTION") {
      errorMessage =
        "Email service connection failed. Check network or SMTP details.";
      statusCode = 503;
    }

    return NextResponse.json(
      { message: errorMessage, error: error.message },
      { status: statusCode }
    );
  }
}

// Optional: CORS handling for development
export async function OPTIONS() {
  const allowedOrigin =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
