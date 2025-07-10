import { Logo2Svg, NotificationSvg } from "@/ui/icon";

export default function Header() {
  return (
    <header className="w-full sticky h-16 shadow-primary-1 top-0 z-30 py-4 px-4 flex items-center justify-between bg-neutral-Pure_White">
      <Logo2Svg className="size-14" />
      <NotificationSvg className="w-10 h-10 text-neutral-500" />
    </header>
  );
}
