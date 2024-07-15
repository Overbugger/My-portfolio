"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

// EMAIL SENDING FUNCTIONALITY
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message || !name || !SenderEmail) {
    return {
      error: "Invalid form data",
    };
  }
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `okorosamuelchika@gmail.com`,
      subject: `${name} From Contact Form.`,
      reply_to: `${SenderEmail}`,
      text: `sender email: ${SenderEmail} 
       ${message}`,
    });

    return { success: true };
  } catch (error) {
    return {
      error: "Failed to send email",
    };
  }
};
