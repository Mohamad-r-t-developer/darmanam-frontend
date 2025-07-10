"use client";

import { useState } from "react";
import InviteModal from "./_/components/InviteModal";
import LogoutModal from "./_/components/LogoutModal";
import CenterModal from "@/ui/CenterModal";
import Link from "next/link";
import Header from "@/components/Header";
import UserInfoCard from "./_/components/UserInfoCard";
import {
  HealthGraphSvg,
  LessThanSvg,
  LoacationSvg,
  LogoutSvg,
  ShareSvg,
  TimeMachineSvg,
  VoucherSvg,
} from "@/ui/icon";

const navIcons = {
  "آدرس ها": LoacationSvg,
  "پرونده سلامت": HealthGraphSvg,
  "تاریخچه درخواست ها": TimeMachineSvg,
  "پیشنهادات ویژه": VoucherSvg,
  "معرفی به دوستان": ShareSvg,
  "خروج از حساب کاربری": LogoutSvg,
} as const;

type NavTitle = keyof typeof navIcons;

type NavComponent = {
  title: NavTitle;
  href: string;
};
type modalComponent = {
  title: NavTitle;
  component: React.ReactNode;
};

const navItems: NavComponent[] = [
  { title: "آدرس ها", href: "/patient/profile/address-list" },
  { title: "پرونده سلامت", href: "/patient/profile/health-record" },
  { title: "تاریخچه درخواست ها", href: "/patient/profile/request-history" },
  { title: "پیشنهادات ویژه", href: "/patient/profile/special-offers" },
];

const modalItems: modalComponent[] = [
  { title: "معرفی به دوستان", component: <InviteModal /> },
  { title: "خروج از حساب کاربری", component: <LogoutModal /> },
];

export default function Page() {
  const [modalState, setModalState] = useState<{
    title: string;
    component: React.ReactNode;
    open: boolean;
  }>({ title: "", component: null, open: false });

  const modalHandler = (title: NavTitle) => {
    const modalItem = modalItems.find((item) => item.title === title);
    if (modalItem) {
      setModalState({ title: modalItem.title, component: modalItem.component, open: true });
    }
  };
  return (
    <div className="w-full h-full flex flex-col gap-1">
      <CenterModal
        title={modalState.title}
        isOpen={modalState.open}
        onClose={() => setModalState({ title: "", component: null, open: false })}
      >
        {modalState.component}
      </CenterModal>
      <Header />
      <UserInfoCard />
      {/* profile navbar */}
      <div className="w-full bg-neutral-Pure_White space-y-2 flex-1 p-4">
        {navItems.map((item) => {
          const Icon = navIcons[item.title];
          return (
            <SingleProfileNav key={item.title} href={item.href} Icon={Icon} title={item.title} />
          );
        })}
        {modalItems.map((item) => {
          const Icon = navIcons[item.title];
          return (
            <SingleProfileModal
              key={item.title}
              onClick={() => modalHandler(item.title)}
              Icon={Icon}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

function SingleProfileNav({
  title,
  Icon,
  href,
}: {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="w-full hover:text-primary-500 transition-colors duration-300 flex items-center justify-between text-neutral-500 text-sm px-4 py-3"
    >
      <div className="flex items-center gap-2">
        {<Icon className="w-5 h-5" />}
        <span>{title}</span>
      </div>
      <LessThanSvg className="w-5 h-5 " />
    </Link>
  );
}

function SingleProfileModal({
  Icon,
  title,
  onClick,
}: {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full hover:text-primary-500 transition-colors duration-300 flex items-center justify-between text-neutral-500 text-sm px-4 py-3"
    >
      <div className="flex items-center gap-2">
        {<Icon className="w-5 h-5" />}
        <span>{title}</span>
      </div>
      <LessThanSvg className="w-5 h-5 " />
    </button>
  );
}
