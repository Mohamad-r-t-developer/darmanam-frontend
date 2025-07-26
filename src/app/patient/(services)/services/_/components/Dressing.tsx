import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import { MainServiceType, SubServiceType } from "@/types/serviceTypes";
import { ModalStateType } from "@/types/modalTypes";
import DressingFields from "./DressingFields";
import { BurnValues, SutureValues, WoundValues } from "@/types/inputValueTypes";

type DressingProps = {
  isOpen: boolean;
  service: MainServiceType;
  onClose: () => void;
};

export default function Dressing({ isOpen, onClose, service }: DressingProps) {
  const [selectedSubService, setSelectedSubService] = useState<SubServiceType | null>(null);
  const [modalState, setModalState] = useState<ModalStateType>("selectService");

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setSelectedSubService(null);
        setModalState("selectService");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = (data: WoundValues | BurnValues | SutureValues) => {
    console.log(data);
    setModalState("successMessage");
  };

  const DressingComponent = () => {
    if (!selectedSubService) return null;
    return (
      <DressingFields
        serviceCategory={service.category}
        subService={selectedSubService}
        onClick={handleSubmit}
      />
    );
  };

  if (modalState === "successMessage") return <RequestRegister title="پانسمان" onClose={onClose} />;

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-2 text-sm pb-4 border-b"
        style={{ gridTemplateRows: "repeat(2, 56px)" }}
      >
        {service.children.map((subService) => (
          <div
            key={subService._id}
            onClick={() =>
              setSelectedSubService((prev) => (prev?._id === subService._id ? null : subService))
            }
            className={`${
              selectedSubService && selectedSubService._id === subService._id
                ? "bg-secondary-400 text-neutral-0"
                : ""
            } cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {subService.name}
          </div>
        ))}
      </div>
      {DressingComponent()}
    </div>
  );
}
