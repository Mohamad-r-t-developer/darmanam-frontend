import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import RequestCost from "./RequestCost";

type CheckupPrpos = {
  isOpen: boolean;
  onClose: () => void;
};

type ModalState = "selectService" | "successMessage";

export default function Checkup({ isOpen, onClose }: CheckupPrpos) {
  const [selectedField, setSelectedField] = useState<string[]>([]);
  const [modalState, setModalState] = useState<ModalState>("selectService");
  const fields = ["کنترل فشار و قند خون", "کنترل اکسیژن خون", "تب سنجی"];

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setSelectedField([]);
        setModalState("selectService");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const clickHandler = () => {
    setModalState("successMessage");
  };

  if (modalState === "successMessage") return <RequestRegister title="پایش" onClose={onClose} />;

  return (
    <div className="w-full flex flex-col gap-2 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-1 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {fields.map((field) => (
          <div
            key={field}
            onClick={() => {
              if (selectedField.includes(field)) {
                setSelectedField(selectedField.filter((f) => f !== field));
              } else {
                setSelectedField([...selectedField, field]);
              }
            }}
            className={`${selectedField.includes(field) ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center text-balance text-center`}
          >
            {field}
          </div>
        ))}
      </div>
      <RequestCost/>
      <button
        onClick={clickHandler}
        disabled={selectedField.length === 0}
        className="h-12 rounded-primary-2 w-full bg-primary-500 disabled:bg-primary-100 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
