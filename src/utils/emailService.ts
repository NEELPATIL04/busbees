export interface EmailData {
  from: string; // Changed: now includes sender's email
  to: string;
  subject: string;
  html: string;
}
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    console.log("🚀 Sending email request...");

    // Since you're using Vite proxy, you can just use /api
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      }
    );

    const responseData = await response.json();
    console.log("📧 Email response:", responseData);

    if (response.ok && responseData.success) {
      console.log("✅ Email sent successfully!");
      return true;
    } else {
      console.error("❌ Failed to send email:", responseData.message);
      return false;
    }
  } catch (error) {
    console.error("💥 Error sending email:", error);
    return false;
  }
};

// Contact form email template (the one your Contact component needs)
export const generateContactEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        <!-- Header -->
        <div style="background-color: #000; color: white; padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🚌 BusBees Transportation</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Contact Form Submission</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 20px;">
          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #000;">
            <h2 style="color: #000; margin: 0 0 20px 0; font-size: 20px;">📝 Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #666;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;"><a href="mailto:${
                  formData.email
                }">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 8px 0; color: #666;"><a href="tel:${
                  formData.phone
                }">${formData.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Subject:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.subject
                }</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #000;">
            <h2 style="color: #000; margin: 0 0 20px 0; font-size: 20px;">💬 Message</h2>
            <div style="background-color: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${
                formData.message
              }</p>
            </div>
          </div>

          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; border: 1px solid #4caf50; margin-bottom: 25px;">
            <h3 style="color: #2e7d32; margin: 0 0 10px 0; font-size: 16px;">✅ Next Steps</h3>
            <p style="color: #2e7d32; margin: 0; font-size: 14px;">
              Please respond to this inquiry within 2-4 hours for the best customer experience.
            </p>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              📅 Submitted: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Commercial transportation email template
export const generateCommercialEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Commercial Transportation Inquiry</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        <!-- Header -->
        <div style="background-color: #000; color: white; padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🚌 BusBees Transportation</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Commercial Transportation Inquiry</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 20px;">
          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #000;">
            <h2 style="color: #000; margin: 0 0 20px 0; font-size: 20px;">👤 Personal Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.firstName
                } ${formData.middleName ? formData.middleName + " " : ""}${
    formData.lastName
  }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;"><a href="mailto:${
                  formData.email
                }">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Mobile:</td>
                <td style="padding: 8px 0; color: #666;"><a href="tel:${
                  formData.mobile
                }">${formData.mobile}</a></td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #000;">
            <h2 style="color: #000; margin: 0 0 20px 0; font-size: 20px;">🏢 Transportation Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 30%;">Pickup Location:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.pickupLocation
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Office Address:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.officeAddress
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Office Hours:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.officeStartTime
                } - ${formData.officeEndTime}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; border: 1px solid #4caf50; margin-bottom: 25px;">
            <h3 style="color: #2e7d32; margin: 0 0 10px 0; font-size: 16px;">✅ Next Steps</h3>
            <p style="color: #2e7d32; margin: 0; font-size: 14px;">
              Please contact this customer within 2-4 hours for the best conversion rate.
            </p>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              📅 Submitted: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Student transportation email template
export const generateStudentEmailTemplate = (formData: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>School Bus Service Inquiry</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #000 0%, #333 100%); color: white; padding: 30px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🚌 BusBees Transportation</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">🎓 School Bus Service Inquiry</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 20px;">
          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #000;">
            <h2 style="color: #000; margin: 0 0 20px 0; font-size: 20px;">👨‍👩‍👧 Parent/Guardian Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.firstName
                } ${formData.middleName ? formData.middleName + " " : ""}${
    formData.lastName
  }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;"><a href="mailto:${
                  formData.email
                }">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Mobile:</td>
                <td style="padding: 8px 0; color: #666;"><a href="tel:${
                  formData.mobile
                }">${formData.mobile}</a></td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #000;">
            <h2 style="color: #000; margin: 0 0 20px 0; font-size: 20px;">🏫 School Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 30%;">School Name:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.schoolName
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">School Hours:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.schoolStartTime
                } - ${formData.schoolEndTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Pickup Location:</td>
                <td style="padding: 8px 0; color: #666;">${
                  formData.pickupLocation
                }</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border: 1px solid #ffeaa7; margin-bottom: 25px;">
            <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 16px;">⚠️ PRIORITY: School Transportation</h3>
            <p style="color: #856404; margin: 0; font-size: 14px;">
              <strong>Safety First:</strong> This is a school transportation inquiry. Ensure all safety protocols, driver verification, and route planning are discussed during follow-up.
            </p>
          </div>

          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; border: 1px solid #4caf50;">
            <h3 style="color: #2e7d32; margin: 0 0 10px 0; font-size: 16px;">✅ Action Required</h3>
            <ul style="color: #2e7d32; margin: 0; padding-left: 20px; font-size: 14px;">
              <li>Contact within 2-4 hours</li>
              <li>Discuss safety measures</li>
              <li>Verify route and timing</li>
              <li>Provide quote and start date</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              📅 Submitted: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
