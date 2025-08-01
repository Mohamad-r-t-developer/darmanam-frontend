import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import { MainServiceType, SubServiceType } from "@/types/serviceTypes";
import { ModalStateType } from "@/types/modalTypes";
import InjectionFields from "./InjectionFields";
import { InjectionValues } from "@/types/inputValueTypes";

type InjectionProps = {
  isOpen: boolean;
  service: MainServiceType;
  onClose: () => void;
};

export default function Injection({ isOpen, onClose, service }: InjectionProps) {
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

  const clickHandler = (data: InjectionValues) => {
    console.log(data);
    setModalState("successMessage");
  };

  const renderInjectionComponent = () => {
    if (!selectedSubService) return null;
    switch (selectedSubService.name) {
      case "سرم":
        return (
          <InjectionFields
            onClick={clickHandler}
            serviceCategory={service.category}
            subService={selectedSubService}
            ampouleTitle="تعداد آمپول های داخل سرم"
          />
        );
      case "آمپول عضلانی":
        return (
          <InjectionFields
            onClick={clickHandler}
            serviceCategory={service.category}
            subService={selectedSubService}
            ampouleTitle="تعداد آمپول های عضلانی"
          />
        );
      case "آمپول زیر پوستی":
        return (
          <InjectionFields
            onClick={clickHandler}
            serviceCategory={service.category}
            subService={selectedSubService}
            ampouleTitle="تعداد آمپول های زیر پوستی"
          />
        );
      default:
        return null;
    }
  };

  if (modalState === "successMessage") return <RequestRegister title="تزریق" onClose={onClose} />;

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-2 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {service.children?.map((subService) => (
          <div
            key={subService._id}
            onClick={() =>
              setSelectedSubService((prev) => (prev?._id === subService._id ? null : subService))
            }
            className={`${selectedSubService && selectedSubService._id === subService._id ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {subService.name}
          </div>
        ))}
      </div>
      {renderInjectionComponent()}
    </div>
  );
}
