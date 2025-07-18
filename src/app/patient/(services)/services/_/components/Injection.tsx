import { useEffect, useState } from "react";
import RequestRegister from "./RequestRegister";
import RequestCost from "./RequestCost";
import { AddSvg, MinusSvg } from "@/ui/icon";
import { Controller, useForm } from "react-hook-form";
import { InjectionValues } from "@/types/serviceTypes";

type InjectionProps = {
  isOpen: boolean;
  onClose: () => void;
};
type InjectionFieldsProps = {
  ampouleTitle: string;
  type: "آمپول زیر پوستی" | "سرم" | "آمپول عضلانی";
  onClick: (data: InjectionValues) => void;
};
type ModalState = "selectService" | "successMessage";
type InjectionType = "سرم" | "آمپول عضلانی" | "آمپول زیر پوستی";

export default function Injection({ isOpen, onClose }: InjectionProps) {
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

  const clickHandler = (data: InjectionValues) => {
    console.log(data);
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

  if (modalState === "successMessage") return <RequestRegister title="تزریق" onClose={onClose} />;

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
  const { control, setValue, handleSubmit, watch } = useForm<InjectionValues>({
    defaultValues: { count: 1 },
  });

  const ampoules = watch("count");

  useEffect(() => {
    setValue("count", 1);
  }, [type, setValue]);

  const increase = () => {
    if (ampoules < 50) {
      setValue("count", ampoules + 1);
    }
  };

  const decrease = () => {
    if (ampoules > 1) {
      setValue("count", ampoules - 1);
    }
  };

  const onSubmit = (data: InjectionValues) => {
    if (data.count >= 1) {
      onClick(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 text-neutral-500">
      <div className="w-full flex items-center justify-between text-sm font-medium">
        <label htmlFor="ampoules">{ampouleTitle}</label>

        <Controller
          name="count"
          control={control}
          render={() => (
            <div className="flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-primary-2">
              <button type="button" onClick={increase} className="px-2">
                <AddSvg className="w-5 h-5" />
              </button>
              <span>{ampoules}</span>
              <button type="button" onClick={decrease} className="px-2">
                <MinusSvg className="w-5 h-5" />
              </button>
            </div>
          )}
        />
      </div>

      <RequestCost />

      <button
        type="submit"
        disabled={ampoules < 1}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-100 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </form>
  );
}
