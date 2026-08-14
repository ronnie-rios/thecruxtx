import type { FormField } from "./types";

export const contactMeta = {
  title: "Contact | Crux Consulting",
  description:
    "Get in touch with Crux Consulting. We guide clients through the financial and operational challenges that come with growth.",
} as const;

export const contactHero = {
  heading: "Get in Touch",
  body: "We guide clients through the financial and operational challenges that come with growth.",
} as const;

export const contactSection = {
  heading: "Contact Us",
  body: "We'd love to hear from you! Contact us to schedule your appointment.",
} as const;

export const form = {
  intro: "Get in touch with us today and let us help!",
  submitLabel: "Send Message",
  pendingLabel: "Sending…",
  successMessage: "Thanks for reaching out. We'll be in touch shortly.",
  errorMessage: "Something went wrong. Please try again, or email us directly.",
  /** Bots fill this; humans never see it. Submissions with it set are dropped. */
  honeypotName: "company_website",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "First Last",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      placeholder: "(555) 555-5555",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@company.com",
      required: true,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "How can we help?",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about your business and where you're headed.",
      required: true,
    },
  ] satisfies readonly FormField[],
} as const;

export const validation = {
  required: "This field is required.",
  email: "Please enter a valid email address.",
} as const;
