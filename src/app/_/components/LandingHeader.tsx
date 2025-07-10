import { Logo2Svg, Logo3Svg, MenuSvg } from "@/ui/icon";

export default function LandingHeader() {
  return (
    <header className="w-full h-20 px-4 bg-neutral-Pure_White flex items-center justify-between shadow-primary-2">
      <MenuSvg className="w-10 h-10 cursor-pointer" />
      <div className="flex items-center">
        <Logo3Svg className="w-10 h-10" />
        <Logo2Svg className="w-12 h-12" />
      </div>
    </header>
  );
}
