import { z } from "zod";

/**
 * Contact form validation schema
*/

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name."),

  email: z
    .email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(1, "Please enter a message so we know how to help."),

  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),

  reason: z
    .string()
    .refine(
      (val) => val !== "",
      { message: "Please select a reason for contacting us." }
    ),

  // Honeypot
  company: z
    .string()
    .trim()
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
