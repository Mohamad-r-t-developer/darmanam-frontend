import { SvgProps } from "@/types/svgPropsType";

export default function ChevronSvg({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 24L20 16L12 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 24L20 16L12 8"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
