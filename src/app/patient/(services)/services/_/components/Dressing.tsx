import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import WondFields from "./WondFields";
import BurnFields from "./BurnFields";
import SutureFields from "./SutureFields";

import {
  BurnValues,
  WoundValues,
  SutureValues,
} from "@/types/serviceTypes";

type DressingProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DressingType =
  | "محل جراحی"
  | "سوختگی"
  | "زخم دیابتی"
  | "زخم بستر"
  | "کشیدن بخیه"
  | "بخیه پوست";

type DressingFieldsProps = {
  type: DressingType;
  fieldTitle: string;
  onClick: (data: WoundValues | BurnValues | SutureValues) => void;
};

type ModalState = "selectService" | "successMessage";

export default function Dressing({ isOpen, onClose }: DressingProps) {
  const [selectedField, setSelectedField] = useState<DressingType | "">("");
  const [modalState, setModalState] = useState<ModalState>("selectService");

  const fields: DressingType[] = [
    "محل جراحی",
    "سوختگی",
    "زخم دیابتی",
    "زخم بستر",
    "کشیدن بخیه",
    "بخیه پوست",
  ];

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setSelectedField("");
        setModalState("selectService");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = (
    data: WoundValues | BurnValues | SutureValues
  ) => {
    console.log("ثبت شد:", data);
    setModalState("successMessage");
  };

  const renderDressingComponent = () => {
    if (!selectedField) return null;
    return (
      <DressingFields
        type={selectedField}
        fieldTitle={selectedField}
        onClick={handleSubmit}
      />
    );
  };

  if (modalState === "successMessage")
    return <RequestRegister title="پانسمان" onClose={onClose} />;

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-2 text-sm pb-4 border-b"
        style={{ gridTemplateRows: "repeat(2, 56px)" }}
      >
        {fields.map((field) => (
          <div
            key={field}
            onClick={() =>
              setSelectedField((prev) => (prev === field ? "" : field))
            }
            className={`${
              selectedField === field
                ? "bg-secondary-400 text-neutral-0"
                : ""
            } cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {field}
          </div>
        ))}
      </div>
      {renderDressingComponent()}
    </div>
  );
}

function DressingFields({ type, fieldTitle, onClick }: DressingFieldsProps) {
  if (
    type === "محل جراحی" ||
    type === "زخم دیابتی" ||
    type === "زخم بستر" ||
    type === "کشیدن بخیه"
  ) {
    return (
      <WondFields
        type={type}
        countStep={
          type === "محل جراحی" || type === "زخم بستر" ? 5 : 1
        }
        onClick={onClick}
        fieldTitle={fieldTitle}
      />
    );
  }

  if (type === "سوختگی") {
    return <BurnFields onClick={onClick} />;
  }

  // بخیه پوست
  return <SutureFields onClick={onClick} />;
}
