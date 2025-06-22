import { CommercialFormData, StudentFormData, ContactFormData } from "./types";

export const generateCommercialEmailTemplate = (
  formData: CommercialFormData
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Commercial Transportation Inquiry</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { width: 80%; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
            h2 { color: #0056b3; }
            ul { list-style: none; padding: 0; }
            ul li { margin-bottom: 10px; }
            ul li strong { display: inline-block; width: 150px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New Commercial Transportation Inquiry</h2>
            <p>You have received a new commercial transportation inquiry from your website:</p>
            <ul>
                <li><strong>Name:</strong> ${formData.firstName} ${
    formData.middleName ? formData.middleName + " " : ""
  }${formData.lastName}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Mobile:</strong> ${formData.mobile}</li>
                <li><strong>Pickup Location:</strong> ${
                  formData.pickupLocation
                }</li>
                <li><strong>Office Address:</strong> ${
                  formData.officeAddress
                }</li>
                <li><strong>Office Start Time:</strong> ${
                  formData.officeStartTime
                }</li>
                <li><strong>Office End Time:</strong> ${
                  formData.officeEndTime
                }</li>
            </ul>
            <p>Please contact the client at: ${formData.email} or ${
    formData.mobile
  }</p>
        </div>
    </body>
    </html>
  `;
};

export const generateStudentEmailTemplate = (
  formData: StudentFormData
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>School Bus Service Inquiry</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { width: 80%; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
            h2 { color: #0056b3; }
            ul { list-style: none; padding: 0; }
            ul li { margin-bottom: 10px; }
            ul li strong { display: inline-block; width: 150px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New School Bus Service Inquiry</h2>
            <p>You have received a new school bus service inquiry from your website:</p>
            <ul>
                <li><strong>Name:</strong> ${formData.firstName} ${
    formData.middleName ? formData.middleName + " " : ""
  }${formData.lastName}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Mobile:</strong> ${formData.mobile}</li>
                <li><strong>School Name:</strong> ${formData.schoolName}</li>
                <li><strong>School Start Time:</strong> ${
                  formData.schoolStartTime
                }</li>
                <li><strong>School End Time:</b> ${formData.schoolEndTime}</li>
                <li><strong>Pickup Location:</strong> ${
                  formData.pickupLocation
                }</li>
            </ul>
            <p>Please contact the client at: ${formData.email} or ${
    formData.mobile
  }</p>
        </div>
    </body>
    </html>
  `;
};

export const generateContactEmailTemplate = (
  formData: ContactFormData
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { width: 80%; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; }
            h2 { color: #0056b3; }
            ul { list-style: none; padding: 0; }
            ul li { margin-bottom: 10px; }
            ul li strong { display: inline-block; width: 100px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New Contact Form Submission</h2>
            <p>You have received a new message from your website contact form:</p>
            <ul>
                <li><strong>Name:</strong> ${formData.name}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Phone:</strong> ${formData.phone}</li>
                <li><strong>Subject:</strong> ${formData.subject}</li>
                <li><strong>Message:</strong><br>${formData.message.replace(
                  /\n/g,
                  "<br>"
                )}</li>
            </ul>
            <p>Please respond to the sender's email address: ${
              formData.email
            }</p>
        </div>
    </body>
    </html>
  `;
};
