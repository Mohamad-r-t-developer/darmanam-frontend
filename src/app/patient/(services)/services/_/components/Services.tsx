"use client";

import { useState } from "react";
import Dressing from "./Dressing";
import Injection from "./Injection";
import Checkup from "./Checkup";
import SpecialCare from "./SpecialCare";
import ServiceModal from "@/ui/ServiceModal";
import {
  AmbulanceSvg,
  BandageSvg,
  CheckupSvg,
  InjectionSvg,
  NurseCallSvg,
  StudentSvg,
} from "@/ui/icon";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const services = [
    {
      id: 1,
      title: "پانسمان",
      Icon: <BandageSvg className="w-8 h-8" />,
      modalTitle: "درخواست پانسمان",
    },
    {
      id: 2,
      title: "تزریقات",
      Icon: <InjectionSvg className="w-8 h-8" />,
      modalTitle: "درخواست تزریقات",
    },
    {
      id: 3,
      title: "چک آپ",
      Icon: <CheckupSvg className="w-8 h-8" />,
      modalTitle: "درخواست پایش سلامت",
    },
    {
      id: 4,
      title: "مراقبت ویژه",
      Icon: <AmbulanceSvg className="w-8 h-8" />,
      modalTitle: "درخواست مراقبت ویژه",
    },
    {
      id: 5,
      title: "آموزش",
      Icon: <StudentSvg className="w-8 h-8" />,
      modalTitle: "",
    },
    {
      id: 6,
      title: "همراه بیمار",
      Icon: <NurseCallSvg className="w-8 h-8" />,
      modalTitle: "",
    },
  ];

  const renderServiceComponent = () => {
    switch (selectedServiceId) {
      case 1:
        return <Dressing isOpen={isOpen} />;
      case 2:
        return <Injection isOpen={isOpen} />;
      case 3:
        return <Checkup isOpen={isOpen} />;
      case 4:
        return <SpecialCare isOpen={isOpen} />;
      default:
        return null;
    }
  };

  const modalTitle = services.find((s) => s.id === selectedServiceId)?.modalTitle || "";

  return (
    <div className="w-full grid grid-cols-4 gap-4 text-neutral-500">
      <ServiceModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={modalTitle}>
        {renderServiceComponent()}
      </ServiceModal>
      {services.map((service) => (
        <div key={service.id} className="flex flex-col items-center gap-2">
          <div
            onClick={() => {
              setSelectedServiceId(service.id);
              setIsOpen(true);
            }}
            className="w-12 h-12 cursor-pointer bg-secondary-50 rounded-primary-2 flex items-center justify-center text-secondary-500"
          >
            {service.Icon}
          </div>
          <span className="font-medium text-sm">{service.title}</span>
        </div>
      ))}
    </div>
  );
}
