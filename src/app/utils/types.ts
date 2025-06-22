// utils/types.ts

export interface CommercialFormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobile: string;
  pickupLocation: string;
  officeAddress: string;
  officeStartTime: string;
  officeEndTime: string;
}

export interface StudentFormData {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  mobile: string;
  schoolName: string;
  schoolStartTime: string;
  schoolEndTime: string;
  pickupLocation: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Interface for Nodemailer's SentMessageInfo (can be reused)
export interface SentMessageInfo {
  messageId: string;
  envelope: any;
  accepted: string[];
  rejected: string[];
  pending: string[];
  response: string;
}
