"use client";
import { RightSvg } from "@/ui/icon";
import { useRouter } from "next/navigation";

export default function PageHeader({ title }: { title: string }) {
  const router = useRouter();
  return (
    <header className="w-full flex h-14 items-center shadow-primary-2 border-b border-neutral-200 p-4 gap-2">
      <button onClick={() => router.back()}>
        <RightSvg className="w-6 h-6" />
      </button>
      <h2 className="font-medium">{title}</h2>
    </header>
  );
}
