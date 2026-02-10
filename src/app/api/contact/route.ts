import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { contactSchema } from "@/lib/contactSchema";

export const runtime = "nodejs";

/**
 * Your shared schema (contactSchema) currently validates:
 * name, email, message, phone?, intent?, company?
 *
 * Your route also expects `reason`, so we extend the schema here
 * without changing your shared schema file.
 */
const serverSchema = contactSchema.extend({
  reason: z.string().trim().min(1, "Reason is required."),
});

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatReason(reason: string) {
  const map: Record<string, string> = {
    first_time_buyer: "First time buyer",
    buying_a_home: "Buying a home",
    selling_a_home: "Selling a home",
    affordable_loans: "Community Affordable Loans",
    rent_to_own: "Rent to own",
    down_payment_assistance: "Down payment assistance",
    notary_services: "Notary services",
    credit_repair: "Credit repair",
    just_browsing: "Just browsing",
    other: "Other",
  };
  return map[reason] ?? reason;
}

/* -------------------------------------------------------------------------- */
/* Templates (UNCHANGED)                                                      */
/* -------------------------------------------------------------------------- */

function ownerEmailHtml(args: {
  brand: string;
  siteUrl: string;
  name: string;
  email: string;
  phone?: string;
  reason: string;
  message: string;
}) {
  const brand = escapeHtml(args.brand);
  const siteUrl = escapeHtml(args.siteUrl);
  const name = escapeHtml(args.name);
  const email = escapeHtml(args.email);
  const phone = escapeHtml(args.phone || "(not provided)");
  const reason = escapeHtml(formatReason(args.reason));
  const message = escapeHtml(args.message).replaceAll("\n", "<br/>");

  return `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background: #F5F5F5;">
  <tr>
    <td align="center">
      <table width="600px" cellpadding="0" cellspacing="0" style="background: #FFFFFF;">
        <tr>
          <td colspan="3" style="background: #00549E; padding: 3px">
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding: 24px 24px 0 24px;">
            <h1 style="font-size: 24px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; margin: 24px 0 36px 0; line-height: 30px;">New Website Lead</h1>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;"><strong>Phone:</strong> ${phone}</p>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;"><strong>Reason:</strong> ${reason}</p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding: 0 24px 24px 24px;">
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;"><strong>Message:</strong></p>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px; padding: 24px; background: #F4FAFF; border-radius: 6px;">${message}</p>
            <p style="font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;"><em>Submitted from: ${siteUrl}</em></p>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding:24px; text-align: center; background: #00549E;">
            <p style="margin: 24px 0 0 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: white;">© ${brand}</p>
            <p style="margin: 6px 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: white;">Alicia Carter, Licensed by Texas Real Estate Commission</p>
            <p style="margin: 6px 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: white;">(972) 230-2100</p>
            <ul style="list-style-type: none; display: inline-block; margin: 24px 0; padding: 0;">
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.facebook.com/aliciacarterrealty">
                  <img height="32" width="32" alt="facebook-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/facebook-white_dwruqm.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.twitter.com/homesbyalicia">
                  <img height="32" width="32" alt="x-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/x-white_rsrhat.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.youtube.com/acrealtyandcreditservices">
                  <img height="32" width="32" alt="youtube-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/youtube-white_g5eupl.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.pinterest.com/aliciacarterrealty">
                  <img height="32" width="32" alt="pinterest-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/pinterest-white_qwaeui.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.instagram.com/homesbyalicia0?igshid=xw8e6senuoy">
                  <img height="32" width="32" alt="instagram-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/instagram-white_x9pl38.svg">
                </a>
              </li>
            </ul>
            <img height="25" width="" style="display: block; margin: 24px auto 12px auto;" alt="alicia_carter_realty_logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770325525/Alicia_Carter_Logo_-_white_kudine.svg">
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
    `;
}

function userConfirmHtml(args: { brand: string; name: string; siteUrl: string }) {
  const brand = escapeHtml(args.brand);
  const name = escapeHtml(args.name);
  const siteUrl = escapeHtml(args.siteUrl);

  return `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background: #F5F5F5;">
  <tr>
    <td align="center">
      <table width="600px" cellpadding="0" cellspacing="0" style="background: #FFFFFF;">
        <tr>
          <td colspan="3" style="background: #00549E; padding: 3px">
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding:24px;">
            <h1 style="font-size: 30px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; margin: 48px 0; line-height: 36px;">You're one step closer.<br> <span style="color: #00549E;">Let's get you home.</span></h1>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px;">Hi ${name},</p>
            <p style="font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 400; line-height: 24px; padding-bottom: 48px;">Thanks for reaching out to ${brand}. You’re message is in good hands, and we’ll be in touch with you shortly. While you’re here, take a moment to explore our other services. We’re here to guide and support you through every step of the home-buying process.</p>
          </td>
        </tr>
        <tr style="background: #F4FAFF;">
          <td style="width: 33%; padding-top: 48px; text-align: center;">
            <img height="60" width="60" alt="down_payment_assistance" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770323631/down_payment_assistance_smjuvf.svg">
            <p style="margin-top: 0; font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500;">Down Payment<br> Assistance</p>
          </td>
          <td style="width: 33%; padding-top: 48px; text-align: center;">
            <img height="60" width="60" alt="credit_score_services" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770323631/credit_score_services_fridbf.svg">
            <p style="margin-top: 0; font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500;">Credit Score<br> Services</p>
          </td>
          <td style="width: 33%; padding-top: 48px; text-align: center;">
            <img height="60" width="60" alt="affordable_loans" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770323631/affordable_loans_vk26if.svg">
            <p style="margin-top: 0; font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500;">Affordable<br> Loans</p>
          </td>
        </tr>
        <tr style="background: #F4FAFF;">
          <td colspan="3" style="padding-top: 24px; padding-bottom: 72px; text-align: center;">
            <a target="_blank" href="${siteUrl}" style="text-decoration: none; background: #00549E; color: white; padding: 9px 12px; border-radius: 3px;">Explore Our Services</a>
          </td>
        </tr>
        <tr>
          <td colspan="3" style="padding:24px; text-align: center; background: #00549E;">
            <p style="margin: 24px 0 0 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: white;">© ${brand}</p>
            <p style="margin: 6px 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: white;">Alicia Carter, Licensed by Texas Real Estate Commission</p>
            <p style="margin: 6px 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: white;">(972) 230-2100</p>
            <ul style="list-style-type: none; display: inline-block; margin: 24px 0; padding: 0;">
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.facebook.com/aliciacarterrealty">
                  <img height="32" width="32" alt="facebook-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/facebook-white_dwruqm.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.twitter.com/homesbyalicia">
                  <img height="32" width="32" alt="x-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/x-white_rsrhat.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.youtube.com/acrealtyandcreditservices">
                  <img height="32" width="32" alt="youtube-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/youtube-white_g5eupl.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.pinterest.com/aliciacarterrealty">
                  <img height="32" width="32" alt="pinterest-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/pinterest-white_qwaeui.svg">
                </a>
              </li>
              <li style="display: inline-block; margin: 0 12px;">
                <a target="_blank" href="https://www.instagram.com/homesbyalicia0?igshid=xw8e6senuoy">
                  <img height="32" width="32" alt="instagram-logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770319235/instagram-white_x9pl38.svg">
                </a>
              </li>
            </ul>
            <p style="margin: 24px 0 0 0; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 500; color: #F4FAFF;"><em>You are receiving this email because you submitted a request for information on our website. Your information will only be used to respond to your inquiry.</em></p>
            <img height="25" width="" style="display: block; margin: 24px auto 12px auto;" alt="alicia_carter_realty_logo" src="https://res.cloudinary.com/deveke/image/upload/f_png/v1770325525/Alicia_Carter_Logo_-_white_kudine.svg">
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
    `;
}

function formatOwnerText(args: {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  siteUrl: string;
  brand: string;
}) {
  return `NEW WEBSITE LEAD

  Name: ${args.name}
  Email: ${args.email}
  Phone: ${args.phone}
  Reason: ${args.reason}

  Message:
  ${args.message}

  Submitted from: ${args.siteUrl}

  —
  © ${args.brand}
  Alicia Carter, Licensed by Texas Real Estate Commission
  (972) 230-2100

  Social:
  Facebook: https://www.facebook.com/aliciacarterrealty
  X: https://www.twitter.com/homesbyalicia
  YouTube: https://www.youtube.com/acrealtyandcreditservices
  Pinterest: https://www.pinterest.com/aliciacarterrealty
  Instagram: https://www.instagram.com/homesbyalicia0?igshid=xw8e6senuoy
  `;
}

function formatUserText(args: { name: string; brand: string; siteUrl: string }) {
  return `YOU'RE ONE STEP CLOSER.
  Let's get you home.

  Hi ${args.name},

  Thanks for reaching out to ${args.brand}. Your message is in good hands, and we’ll be in touch with you shortly.

  While you’re here, take a moment to explore our other services. We’re here to guide and support you through every step of the home-buying process.

  Service highlights:
  - Down Payment Assistance
  - Credit Score Services
  - Affordable Loans

  Explore Our Services:
  ${args.siteUrl}

  —
  © ${args.brand}
  Alicia Carter, Licensed by Texas Real Estate Commission
  (972) 230-2100

  Follow:
  Facebook: https://www.facebook.com/aliciacarterrealty
  X: https://www.twitter.com/homesbyalicia
  YouTube: https://www.youtube.com/acrealtyandcreditservices
  Pinterest: https://www.pinterest.com/aliciacarterrealty
  Instagram: https://www.instagram.com/homesbyalicia0?igshid=xw8e6senuoy

  You are receiving this email because you submitted a request for information on our website. Your information will only be used to respond to your inquiry.
  `;
}

/* -------------------------------------------------------------------------- */
/* Handler                                                                     */
/* -------------------------------------------------------------------------- */

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = serverSchema.safeParse(body);

    if (!parsed.success) {
      // Field-level errors for the client (React Hook Form can use these if you choose)
      return NextResponse.json(
        {
          error: "Invalid form data.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, reason, message, company } = parsed.data;

    // Honeypot: silently succeed
    if (company && company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { error: "Service is missing email configuration." },
        { status: 500 }
      );
    }

    // Support your current env var typo + the common correct one.
    const apiKey = process.env.RESENT_API_KEY || process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Service is missing email configuration." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const brand = "Alicia Carter Realty";
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const reasonLabel = formatReason(reason);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Lead: ${name} - ${reasonLabel}`,
      html: ownerEmailHtml({
        brand,
        siteUrl,
        name,
        email,
        phone,
        reason,
        message,
      }),
      text: formatOwnerText({
        name,
        email,
        phone: phone || "(not provided)",
        reason: reasonLabel,
        message,
        siteUrl,
        brand,
      }),
    });

    await resend.emails.send({
      from,
      to: email,
      replyTo: to, // replies go back to the business inbox
      subject: `We received your message. — ${brand}`,
      html: userConfirmHtml({ brand, name, siteUrl }),
      text: formatUserText({
        name,
        brand,
        siteUrl,
      }),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong sending the message" },
      { status: 500 }
    );
  }
}
