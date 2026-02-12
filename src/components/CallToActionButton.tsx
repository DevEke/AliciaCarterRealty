"use client";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
import { useRouter } from "next/navigation";


type CallToActionButtonProps = {
  label?: string;
  reason?: string;
};

export function CallToActionButton({
  label = "Start Your Homebuyer Journey",
  reason = ""
}: CallToActionButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className="button splashButton"
      onClick={reason ? () => router.push(`/contact?reason=${reason}`) : () => router.push(`/contact`)}
    >
      {label}
    </button>
  );
}
