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

  const renderInjectionAmpoleTitle = () => {
    if (selectedSubService)
      if (selectedSubService.name === "سرم") {
        return "تعداد آمپول های داخل سرم";
      } else if (selectedSubService?.name === "آمپول عضلانی") {
        return "تعداد آمپول های عضلانی";
      }
    return "تعداد آمپول های زیر پوستی";
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
      {selectedSubService && (
        <InjectionFields
          onClick={clickHandler}
          mainService={service}
          subService={selectedSubService}
          ampouleTitle={renderInjectionAmpoleTitle()}
        />
      )}
    </div>
  );
}
