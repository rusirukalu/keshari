"use server";

export interface FormState {
  success: boolean;
  message: string;
  errors?: {
    studentName?: string;
    parentName?: string;
    email?: string;
    phone?: string;
    grade?: string;
    message?: string;
  };
}

export async function submitInquiryAction(prevState: any, formData: FormData): Promise<FormState> {
  // Simulate network latency (800ms)
  await new Promise((resolve) => setTimeout(resolve, 800));

  const studentName = formData.get("studentName")?.toString().trim();
  const parentName = formData.get("parentName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const grade = formData.get("grade")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  // Basic server validation
  const errors: NonNullable<FormState["errors"]> = {};

  if (!studentName || studentName.length < 2) {
    errors.studentName = "Please enter a valid student name (min 2 characters).";
  }

  if (!parentName || parentName.length < 2) {
    errors.parentName = "Please enter a valid parent/guardian name (min 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!phone || phone.length < 9) {
    errors.phone = "Please enter a valid contact number (min 9 digits).";
  }

  if (!grade || grade === "") {
    errors.grade = "Please select a grade level.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the validation errors below.",
      errors,
    };
  }

  // Success simulation
  // In a real environment, you would:
  // 1. Store this inquiry in your PostgreSQL/Prisma or MongoDB database
  // 2. Trigger an email notification via Resend, SendGrid, etc.
  // 3. Send a Telegram/WhatsApp webhook update
  console.log("Inquiry received successfully:", {
    studentName,
    parentName,
    email,
    phone,
    grade,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Thank you for your enquiry. We will contact you within 24 hours to schedule a consultation.",
  };
}
