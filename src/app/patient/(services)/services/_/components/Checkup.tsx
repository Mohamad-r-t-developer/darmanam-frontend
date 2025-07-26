import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import RequestCost from "./RequestCost";
import { ModalStateType } from "@/types/modalTypes";
import { SubServiceType } from "@/types/serviceTypes";

type CheckupPrpos = {
  isOpen: boolean;
  subService: SubServiceType;
  onClose: () => void;
};

export default function Checkup({ isOpen, onClose, subService }: CheckupPrpos) {
  const [selectedSubService, setSelectedSubService] = useState<string[]>([]);
  const [modalState, setModalState] = useState<ModalStateType>("selectService");

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setSelectedSubService([]);
        setModalState("selectService");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const clickHandler = () => {
    console.log(selectedSubService);
    setModalState("successMessage");
  };

  if (modalState === "successMessage") return <RequestRegister title="چک آپ" onClose={onClose} />;

  if (!subService.price.options) return null;
  return (
    <div className="w-full flex flex-col gap-2 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-1 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {subService.price.options.map((option) => {
          const isSelected = selectedSubService.some((s) => s === option.label);
          return (
            <div
              key={option._id}
              onClick={() => {
                setSelectedSubService((prev) =>
                  isSelected
                    ? prev.filter((s) => s !== option.label)
                    : [...prev, option.label]
                );
              }}
              className={`${
                isSelected ? "bg-secondary-400 text-neutral-0" : ""
              } text-sm cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center text-balance text-center`}
            >
              {option.label}
            </div>
          );
        })}
      </div>
      <RequestCost price={subService.price} values={selectedSubService} />
      <button
        onClick={clickHandler}
        disabled={selectedSubService.length === 0}
        className="h-12 rounded-primary-2 w-full bg-primary-500 disabled:bg-primary-100 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
