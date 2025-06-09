import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 3001;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173", "https://bus-bee.netlify.app"],
    credentials: true,
  })
);
app.use(express.json());

// Email endpoint - UPDATED to use sender's email as "from"
app.post("/api/send-email", async (req, res) => {
  const { from, to, subject, html } = req.body;

  console.log("📧 Email request received");
  console.log("From:", from);
  console.log("To:", to || "busbees1@gmail.com");
  console.log("Subject:", subject);

  if (!subject || !html || !from) {
    return res.status(400).json({
      success: false,
      message: "From email, subject and html content are required",
    });
  }

  // Gmail transporter - using your BusBees Gmail for SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "busbees1@gmail.com",
      pass: "mdkdwgpeoqwkxing",
    },
  });

  try {
    console.log("🔄 Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    console.log("📤 Sending email...");
    const info = await transporter.sendMail({
      from: `"${from}" <busbees1@gmail.com>`, // Display sender's email but send from your Gmail
      to: "busbees1@gmail.com", // Always send to your business email
      replyTo: from, // Set reply-to as the sender's email
      subject: subject,
      html: html,
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);

    let errorMessage = "Failed to send email";
    if (error.code === "EAUTH") {
      errorMessage = "Gmail authentication failed. Check your app password.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error.message,
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    message: "API server is running!",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API server running on http://localhost:${PORT}`);
  console.log(`🌐 Frontend should be on http://localhost:5173`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`);
});
