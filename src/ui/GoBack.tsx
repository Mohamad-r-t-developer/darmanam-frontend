import Link from "next/link";
import { ChevronSvg } from "./icon";


interface GoBackProps {
  href: string;
  className?: string;
  ariaLabel?: string;
}

export default function GoBack({ href, className = "", ariaLabel = "بازگشت" }: GoBackProps) {
  return (
    <Link
      href={href}
      className={`text-neutral-500 inline-flex items-center ${className}`}
      aria-label={ariaLabel}
    >
      <ChevronSvg className="w-7 h-7" />
    </Link>
  );
}
