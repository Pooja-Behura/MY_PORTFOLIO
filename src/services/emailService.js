// src/services/emailService.js
//
// This file connects the contact form to EmailJS so that messages
// submitted on the site land directly in your personal inbox.
//
// STATUS: Already configured with your EmailJS credentials below.
// If you ever need to change them (new account, new template, etc.):
// 1. Free account at https://www.emailjs.com/
// 2. Email Services -> Add New Service -> gives you a SERVICE_ID.
// 3. Email Templates -> template body must use: {{from_name}},
//    {{from_email}}, {{subject}}, {{message}} -> gives you a TEMPLATE_ID.
// 4. Account > General -> PUBLIC_KEY.
// 5. Paste all three into the EMAILJS_CONFIG object below.
//
// These are NOT secret keys — EmailJS is designed to be called safely
// from the browser, so it's normal for these values to live in front-end code.

import emailjs from '@emailjs/browser'

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_32gh465',
  TEMPLATE_ID: 'template_u8fjuwm',
  PUBLIC_KEY: 'hCP9PN8aPoFt6xBwg',
}

/**
 * Sends a contact-form message to your personal email via EmailJS.
 * @param {{ name: string, email: string, subject: string, message: string }} formData
 * @returns {Promise<{ status: number, text: string }>}
 */
export async function sendContactMessage(formData) {
  const isConfigured =
    Boolean(EMAILJS_CONFIG.SERVICE_ID) &&
    Boolean(EMAILJS_CONFIG.TEMPLATE_ID) &&
    Boolean(EMAILJS_CONFIG.PUBLIC_KEY)

  if (!isConfigured) {
    throw new Error(
      'EmailJS is not configured yet. Add your SERVICE_ID, TEMPLATE_ID and PUBLIC_KEY in src/services/emailService.js'
    )
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'behurapooja29@gmail.com',
  }

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  )
}
