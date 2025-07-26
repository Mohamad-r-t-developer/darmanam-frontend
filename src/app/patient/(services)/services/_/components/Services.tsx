"use client";
import { useState } from "react";
import Dressing from "./Dressing";
import Injection from "./Injection";
import Checkup from "./Checkup";
import ServiceModal from "@/ui/ServiceModal";
import { AmbulanceSvg, BandageSvg, CheckupSvg, InjectionSvg } from "@/ui/icon";
import { MainServiceType, ServiceCategoryType } from "@/types/serviceTypes";
import AdvancedCare from "./AdvancedCare";


export default function Services({ servicesList }: { servicesList: MainServiceType[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<MainServiceType | null>(null);
 
  // modal rendering
  const renderServiceComponent = () => {
    switch (selectedService?.category) {
      case "DRESSING":
        return (
          <Dressing service={selectedService} onClose={() => setIsOpen(false)} isOpen={isOpen} />
        );
      case "INJECTION":
        return (
          <Injection service={selectedService} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        );
      case "CHECKUP":
        return (
          <Checkup
            subService={selectedService.children[0]}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        );
      case "ADVANCED_CARE":
        return (
          <AdvancedCare
            subService={selectedService.children[0]}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        );
      default:
        return null;
    }
  };

  // icon rendering
  const renderServiceIcon = (category: ServiceCategoryType) => {
    switch (category) {
      case "DRESSING":
        return <BandageSvg className="w-8 h-8" />;
      case "INJECTION":
        return <InjectionSvg className="w-8 h-8" />;
      case "CHECKUP":
        return <CheckupSvg className="w-8 h-8" />;
      case "ADVANCED_CARE":
        return <AmbulanceSvg className="w-8 h-8" />;
    }
  };

  return (
    <div className="w-full grid grid-cols-4 gap-4 text-neutral-500">
      <ServiceModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`درخواست ${selectedService?.name}`}
      >
        {renderServiceComponent()}
      </ServiceModal>
      {servicesList?.map((service) => (
        <div key={service.key} className="flex flex-col items-center gap-2">
          <div
            onClick={() => {
              setSelectedService(service);
              setIsOpen(true);
            }}
            className="relative w-12 h-12 cursor-pointer bg-secondary-50 rounded-primary-2 flex items-center justify-center text-secondary-500"
          >
            {renderServiceIcon(service.category)}
          </div>
          <span className="font-medium text-sm text-center">{service.name}</span>
        </div>
      ))}
    </div>
  );
}
