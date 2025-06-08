import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS for your Vite dev server
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { from, to, subject, html } = req.body;

  // Validate required fields
  if (!subject || !html || !from) {
    return res.status(400).json({ message: 'From email, subject and html content are required' });
  }

  console.log('Attempting to send email...');
  console.log('From:', from);
  console.log('To:', 'busbees1@gmail.com');
  console.log('Subject:', subject);

  // Create transporter with Gmail configuration
  const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'busbees1@gmail.com',
      pass: 'mdkdwgpeoqwkxing'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // Verify transporter configuration first
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send email - using sender's email as display name but sending from your Gmail
    const info = await transporter.sendMail({
      from: `"${from}" <busbees1@gmail.com>`, // Display sender's email
      to: 'busbees1@gmail.com', // Always send to your business email
      replyTo: from, // Set reply-to as the sender's email
      subject: subject,
      html: html
    });

    console.log('Email sent successfully:', info.messageId);
    
    res.status(200).json({ 
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Detailed error sending email:', error);
    
    let errorMessage = 'Failed to send email';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check email credentials.';
    } else if (error.code === 'ECONNECTION') {  
      errorMessage = 'Connection failed. Please check internet connection.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Invalid email credentials. Please check username/password.';
    }
    
    res.status(500).json({ 
      success: false,
      message: errorMessage, 
      error: error.message,
      code: error.code
    });
  }
}