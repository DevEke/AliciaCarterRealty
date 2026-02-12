"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import sold from "../../../public/sold.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormValues } from "@/lib/contactSchema";
import { contactSchema } from "@/lib/contactSchema";
import Link from "next/link";
import { TbAlertCircle, TbChevronDown } from "react-icons/tb";
import styles from "./page.module.css";

type SubmitState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const allowedReasons = new Set([
  "credit-readiness",
  "down-payment-assistance",
  "affordable-loan-solutions",
  "rent-to-own-services",
  "home-selling",
  "foreclosure-assistance",
  "notary-services",
]);

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const isSuccess = submitState.status === "success";
  const searchParams = useSearchParams();
  const reasonParam = searchParams.get("reason");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    setFocus,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
      company: "",
    },
  });

  function onInvalid() {
    const order: (keyof ContactFormValues)[] = ["name", "email", "reason", "message"];
    const first = order.find((k) => errors[k]);
    if (first) setFocus(first);
  }

  async function onSubmit(values: ContactFormValues) {
    setSubmitState({ status: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        let msg =
          "Something went wrong and your message couldn’t be sent. Please try again in a moment.";

        try {
          const data = (await res.json()) as { error?: string };
          if (data?.error) msg = data.error;
        } catch {
          // ignore JSON parsing errors
        }

        setSubmitState({ status: "error", message: msg });
        return;
      }

      setSubmitState({ status: "success" });
      reset();
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Something went wrong and your message couldn’t be sent. Please try again in a moment.",
      });
    }
  }

  useEffect(() => {
    if (!reasonParam) return;
    if (!allowedReasons.has(reasonParam)) return;

    setValue("reason", reasonParam, { shouldValidate: true, shouldDirty: true });
  }, [reasonParam, setValue]);


  if (isSuccess) {
    return (
      <section  role="status" aria-live="polite" className={styles.formSuccess}>
        <Image height={72} width={72} src={sold} className="gridItemImage" alt="confirm form sent icon" />
        <h2>Message Sent</h2>
        <p>Thank you. Your message was sent successfully. You’ll receive a confirmation email shortly. If
        you need to add details, reply to that email.</p>
        <button
          type="button"
          className={`button ${styles.formButton}`}
          onClick={() => {
            reset();
            setSubmitState({ status: "idle" });
          }}
        >
          Send another message
        </button>
      </section>
    )
  }

  return (
      <form className={styles.contactForm}  onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
      <fieldset disabled={isSubmitting || isSuccess} aria-disabled={isSubmitting || isSuccess}>
      <div className="visuallyHidden" aria-hidden="true">
        <label htmlFor="company"  className={styles.formLabel}>Company</label>
        <input
          type="text"
          id="company"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>
      <div className={styles.formInputContainer}>
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input
          className={styles.formInput}
          id="name"
          placeholder="Name"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name?.message && (
          <div role="alert" className={styles.formError}>
            <TbAlertCircle className={styles.formErrorIcon} />
            <span>{errors.name.message}</span>
          </div>
        )}
      </div>

        <div className={styles.formInputContainer}>
        <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              className={styles.formInput}
              id="email"
              type="email"
              placeholder="Email Address"
              inputMode="email"
              autoComplete="email"
              {...register("email")}
            />
            {errors.email?.message && (
              <div role="alert" className={styles.formError}>
                <TbAlertCircle className={styles.formErrorIcon} />
                <span>{errors.email.message}</span>
              </div>
            )}
        </div>

        <div className={styles.formInputContainer}>
            <label htmlFor="phone" className={styles.formLabel}>Phone (optional)</label>
            <input
              className={styles.formInput}
              id="phone"
              placeholder="Phone Number (optional)"
              inputMode="tel"
              autoComplete="tel"
              {...register("phone")}
            />
            {errors.phone?.message && (
              <div role="alert" className={styles.formError}>
                <TbAlertCircle className={styles.formErrorIcon} />
                <span>{errors.phone.message}</span>
              </div>
            )}
        </div>

        <div className={styles.formInputContainer}>
            <label htmlFor="reason" className={styles.formLabel}>Reason</label>
            <select className={styles.formSelect} id="reason" {...register("reason")}>
                <option value="">What are you looking for?</option>
                <option value="first-time-buyer">First time buyer</option>
                <option value="home-buying">Buying a home</option>
                <option value="home-selling">Selling a home</option>
                <option value="credit-readiness">Credit Readiness</option>
                <option value="affordable-loan-solutions">Community Affordable Loans</option>
                <option value="rent-to-own-services">Rent to own services</option>
                <option value="down-payment-assistance">Down payment assistance</option>
                <option value="notary-services">Notary services</option>
                <option value="foreclosure-assistance">Foreclosure assistance</option>
                <option value="just-browsing">Just browsing</option>
                <option value="other">Other</option>
            </select>
            <TbChevronDown className={styles.selectChevron} />
            {errors.reason?.message && (
              <div role="alert" className={styles.formError}>
                <TbAlertCircle className={styles.formErrorIcon} />
                <span>{errors.reason.message}</span>
              </div>
            )}
        </div>

        <div className={styles.formInputContainer}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea
              className={styles.formTextArea}
              id="message"
              rows={3}
              placeholder="How can we help you?"
              {...register("message")}
            />
            {errors.message?.message && (
            <div role="alert" className={styles.formError}>
              <TbAlertCircle className={styles.formErrorIcon} />
              <span>{errors.message.message}</span>
            </div>
            )}
        </div>

        <button className={`button ${styles.formButton}`} type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
    </fieldset>

        <p className={styles.footNote}>No pressure. This just starts the conversation. Your information is used only to respond to your message.</p>

      {submitState.status === "error" && (
        <div className={styles.errorStatus} role="status">
          <p>Something went wrong and your message couldn’t be sent. Please try again in a moment—or email us directly at <Link href="mailto:info@aliciacarterrealty.com">info@aliciacarterrealty.com</Link>.</p>
        </div>
      )}

    </form>

  );
}
