import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import ToggleSwitch from "@/ui/ToggleSwitch";
import RequestCost from "./RequestCost";
import { AddSvg, MinusSvg } from "@/ui/icon";

type DressingProps = {
  isOpen: boolean;
};

type DressingFieldsProps = {
  type: "محل جراحی" | "سوختگی" | "زخم دیابتی" | "زخم بستر" | "کشیدن بخیه" | "بخیه پوست";
  fieldTitle: string;
  onClick: () => void;
};

type SubServiceProps = {
  onClick: () => void;
};
type DressingType = "محل جراحی" | "سوختگی" | "زخم دیابتی" | "زخم بستر" | "کشیدن بخیه" | "بخیه پوست";
type ModalState = "selectService" | "successMessage";

export default function Dressing({ isOpen }: DressingProps) {
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

  const clickHandler = () => {
    setModalState("successMessage");
  };

  const renderDressingComponent = () => {
    switch (selectedField) {
      case "محل جراحی":
        return <DressingFields onClick={clickHandler} fieldTitle="جراحت" type="محل جراحی" />;
      case "سوختگی":
        return <DressingFields onClick={clickHandler} fieldTitle="" type="سوختگی" />;
      case "زخم دیابتی":
        return <DressingFields onClick={clickHandler} fieldTitle="زخم" type="زخم دیابتی" />;
      case "زخم بستر":
        return <DressingFields onClick={clickHandler} fieldTitle="زخم بستر" type="زخم بستر" />;
      case "کشیدن بخیه":
        return <DressingFields onClick={clickHandler} fieldTitle="بخیه" type="کشیدن بخیه" />;
      case "بخیه پوست":
        return <DressingFields onClick={clickHandler} fieldTitle="" type="بخیه پوست" />;
      default:
        return null;
    }
  };

  if (modalState === "successMessage") return <RequestRegister title="پانسمان" />;

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div
        className="grid grid-cols-3 gap-2 text-sm pb-4 border-b"
        style={{ gridTemplateRows: "repeat(2, 56px)" }}
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
      {renderDressingComponent()}
    </div>
  );
}

function DressingFields({ type, fieldTitle, onClick }: DressingFieldsProps) {
  if (type === "محل جراحی" || type === "زخم دیابتی" || type === "زخم بستر" || type === "کشیدن بخیه")
    return <WondFields onClick={onClick} fieldTitle={fieldTitle} />;

  if (type === "سوختگی") return <BurnFields onClick={onClick} />;

  return <SutureFields onClick={onClick} />;
}

function WondFields({ fieldTitle, onClick }: { fieldTitle: string; onClick: () => void }) {
  const [woundSize, setWoundSize] = useState(1);
  const [needingDressingSupplies, setNeedingDressingSupplies] = useState(false);
  const increase = () => {
    if (woundSize < 200) setWoundSize((prev) => prev + 1);
  };
  const decrease = () => {
    if (woundSize !== 1) setWoundSize((prev) => prev - 1);
  };
  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <div className="w-full flex items-center justify-between text-sm font-medium">
        <label htmlFor="ampoules">{`میزان ${fieldTitle} را مشخص کنید`}</label>
        <div className="flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-primary-2">
          <button onClick={increase} type="button" className="px-2">
            <AddSvg className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <span>cm</span>
            <span>{woundSize}</span>
          </div>
          <button onClick={decrease} type="button" className="px-2 ">
            <MinusSvg className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full">
        <ToggleSwitch
          initialChecked={false}
          label="لوازم پانسمان احتیاج دارم"
          onChange={() => setNeedingDressingSupplies(!needingDressingSupplies)}
        />
      </div>
      {needingDressingSupplies && (
        <div className="w-full">
          <textarea
            placeholder="لوازم مورد نیاز"
            className="outline-none text-sm placeholder:text-neutral-200 placeholder:text-sm resize-none w-full h-24 focus:border-primary-500  p-4 border border-neutral-200 rounded-primary-1"
          ></textarea>
        </div>
      )}
      <RequestCost />
      <button
        type="submit"
        onClick={onClick}
        disabled={woundSize === 0}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}

function BurnFields({ onClick }: SubServiceProps) {
  const [selectedField, setSelectedField] = useState<string[]>([]);
  const burnFields = ["سر", "یک دست", "دو دست", "یک پا", "دو پا", "قفسه سینه", "شکم", "صورت"];

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <h3 className="font-medium">نواحی سوختگی را مشخص کنید</h3>
      <div
        className="grid grid-cols-4 gap-2 text-sm"
        style={{ gridTemplateRows: "repeat(2, 56px)" }}
      >
        {burnFields.map((field) => (
          <div
            key={field}
            onClick={() => {
              if (selectedField.includes(field)) {
                setSelectedField(selectedField.filter((f) => f !== field));
              } else {
                setSelectedField([...selectedField, field]);
              }
            }}
            className={`${selectedField.some((f) => f === field) ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {field}
          </div>
        ))}
      </div>
      <RequestCost />
      <button
        type="submit"
        onClick={onClick}
        disabled={selectedField.length === 0}
        className="h-12 rounded-primary-2 disabled:bg-primary-50 w-full bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}

function SutureFields({ onClick }: SubServiceProps) {
  const [selectedField, setSelectedField] = useState<string>("");
  const sutureFields = ["دست", "پا", "صورت"];

  return (
    <div className="w-full flex flex-col gap-4 text-neutral-500">
      <h3 className="font-medium">نواحی بخیه پوستی را مشخص کنید</h3>
      <div
        className="grid grid-cols-3 gap-2 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {sutureFields.map((field) => (
          <div
            key={field}
            onClick={() => setSelectedField((prev) => (prev === field ? "" : field))}
            className={`${selectedField == field ? "bg-secondary-400 text-neutral-0" : ""} cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {field}
          </div>
        ))}
      </div>
      <RequestCost />
      <button
        type="submit"
        onClick={onClick}
        disabled={selectedField === ""}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </div>
  );
}
