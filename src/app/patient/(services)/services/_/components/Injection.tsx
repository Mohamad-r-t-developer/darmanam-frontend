import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import RequestCost from "./RequestCost";
import { AddSvg, MinusSvg } from "@/ui/icon";

type InjectionProps = {
  isOpen: boolean;
};
type InjectionFieldsProps = {
  ampouleTitle: string;
  type: "آمپول زیر پوستی" | "سرم" | "آمپول عضلانی";
  onClick: () => void;
};
type ModalState = "selectService" | "successMessage";
type InjectionType = "سرم" | "آمپول عضلانی" | "آمپول زیر پوستی";

export default function Injection({ isOpen }: InjectionProps) {
  const [selectedField, setSelectedField] = useState<InjectionType | "">("");
  const [modalState, setModalState] = useState<ModalState>("selectService");
  const fields: InjectionType[] = ["سرم", "آمپول عضلانی", "آمپول زیر پوستی"];

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

  const renderInjectionComponent = () => {
    switch (selectedField) {
      case "سرم":
        return (
          <InjectionFields
            onClick={clickHandler}
            ampouleTitle="تعداد آمپول های داخل سرم"
            type="سرم"
          />
        );
      case "آمپول عضلانی":
        return (
          <InjectionFields
            onClick={clickHandler}
            type="آمپول عضلانی"
            ampouleTitle="تعداد آمپول های عضلانی"
          />
        );
      case "آمپول زیر پوستی":
        return (
          <InjectionFields
            onClick={clickHandler}
            type="آمپول زیر پوستی"
            ampouleTitle="تعداد آمپول های زیر پوستی"
          />
        );
      default:
        return null;
    }
  };

  if (modalState === "successMessage") return <RequestRegister title="تزریق" />;

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-2 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {fields.map((field) => (
          <div
            key={field}
            onClick={() => setSelectedField((prev) => (prev === field ? "" : field))}
            className={`${selectedField == field ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {field}
          </div>
        ))}
      </div>
      {renderInjectionComponent()}
    </div>
  );
}

function InjectionFields({ ampouleTitle, type, onClick }: InjectionFieldsProps) {
  const [ampoules, setAmpoules] = useState(1);

  useEffect(() => {
    setAmpoules(1);
  }, [type]);

  const increase = () => {
    if (ampoules < 50) setAmpoules((prev) => prev + 1);
  };
  const decrease = () => {
    if (ampoules !== 1) setAmpoules((prev) => prev - 1);
  };

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div className="w-full flex items-center justify-between text-sm font-medium">
        <label htmlFor="ampoules">{ampouleTitle}</label>
        <div className="flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-primary-2">
          <button onClick={increase} type="button" className="px-2">
            <AddSvg className="w-5 h-5" />
          </button>
          <span>{ampoules}</span>
          <button onClick={decrease} type="button" className="px-2 ">
            <MinusSvg className="w-5 h-5" />
          </button>
        </div>
      </div>
      <RequestCost />
      <button
        type="submit"
        onClick={onClick}
        disabled={ampoules < 1}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-100 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
