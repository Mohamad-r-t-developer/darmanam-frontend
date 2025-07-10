import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";

type CheckupPrpos = {
  isOpen: boolean;
};

type ModalState = "selectService" | "successMessage";

export default function Checkup({ isOpen }: CheckupPrpos) {
  const [selectedField, setSelectedField] = useState<string>("");
  const [modalState, setModalState] = useState<ModalState>("selectService");
  const fields = ["کنترل فشار و قند خون", "کنترل اکسیژن خون", "تب سنجی"];

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setSelectedField("");
        setModalState("selectService");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const clickHandler = () => {
    setModalState("successMessage");
  };

  if (modalState === "successMessage") return <RequestRegister title="پایش" />;

  return (
    <div className="w-full flex flex-col gap-2 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-1 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {fields.map((field) => (
          <div
            key={field}
            onClick={() => setSelectedField((prev) => (prev === field ? "" : field))}
            className={`${selectedField == field ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center text-balance text-center`}
          >
            {field}
          </div>
        ))}
      </div>
      <div className=" w-full flex items-center gap-1 py-2 text-[11px]">
        <span className="font-semibold">هزینه درخواست : </span>
        <span className="text-neutral-400">برای محاسبه هزینه درخواست خود را انتخاب کنید</span>
      </div>
      <button
        onClick={clickHandler}
        disabled={selectedField === ""}
        className="h-12 rounded-primary-2 w-full bg-primary-500 disabled:bg-primary-100 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
