import { Logo2Svg } from "./icon";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center backdrop-blur-md">
      <Logo2Svg activeAnimate className="w-20" />
    </div>
  );
}
