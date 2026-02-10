"use client";
import { useRouter } from "next/navigation";
import styles from "./../app/page.module.css";

type CallToActionButtonProps = {
  label?: string;
};

export function CallToActionButton({
  label = "Start Your Homebuyer Journey",
}: CallToActionButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="button splashButton"
      onClick={() => router.push("/contact")}
    >
      {label}
    </button>
  );
}
