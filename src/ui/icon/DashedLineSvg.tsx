import { SvgProps } from "@/types/svgPropsType";

export default function DashedLineSvg({ className }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 39C33.3415 37.1905 45.1258 13.3563 52 1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="7 7"
      />
    </svg>
  );
}
