import { SvgProps } from "@/types/svgPropsType";

export default function EyeSvg({className}: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4C4 4 2.5 8 2.5 8C2.5 8 4 12 8 12C12 12 13.5 8 13.5 8C13.5 8 12 4 8 4ZM8 5C10.638 5 11.9723 7.13355 12.4043 7.99805C11.9718 8.85655 10.6275 11 8 11C5.362 11 4.0277 8.86645 3.5957 8.00195C4.0287 7.14345 5.3725 5 8 5ZM8 6C6.8955 6 6 6.8955 6 8C6 9.1045 6.8955 10 8 10C9.1045 10 10 9.1045 10 8C10 6.8955 9.1045 6 8 6ZM8 7C8.5525 7 9 7.4475 9 8C9 8.5525 8.5525 9 8 9C7.4475 9 7 8.5525 7 8C7 7.4475 7.4475 7 8 7Z"
        fill="currentColor"
      />
    </svg>
  );
}
