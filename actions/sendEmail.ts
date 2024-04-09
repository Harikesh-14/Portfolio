"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ReactFormEmailProp = {
  senderEmail: string;
  message: string;
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      status: 400,
      errorMessage: 'Invalid Email',
    }
  }

  if (!validateString(message, 3000)) {
    return {
      status: 400,
      errorMessage: 'Invalid Message',
    }
  }

  try {
    await resend.emails.send({
      from: 'Harikesh Ranjan Sinha <onboarding@resend.dev>',
      to: 'harikeshranjansinha14@gmail.com',
      subject: 'New message from portfolio',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { message, senderEmail } as ReactFormEmailProp),
    });
  } catch (error: unknown) {
    return {
      errorMessage: getErrorMessage(error)
    }
  }
}