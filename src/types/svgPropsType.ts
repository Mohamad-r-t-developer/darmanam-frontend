import { MouseEventHandler } from "react";

export type SvgProps = {
  className?: React.SVGProps<SVGSVGElement>["className"];
  onClick?: MouseEventHandler;
};
