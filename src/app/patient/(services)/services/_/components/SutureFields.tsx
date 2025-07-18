import { useForm, Controller } from "react-hook-form";
import RequestCost from "./RequestCost";
import { SutureValues } from "@/types/serviceTypes";

type SubServiceProps = {
  onClick: (data: SutureValues) => void;
};

export default function SutureFields({ onClick }: SubServiceProps) {
  const { control, handleSubmit, watch } = useForm<SutureValues>({
    defaultValues: {
      area: [],
    },
  });

  const selectedFields = watch("area");
  const sutureFields = ["دست", "پا", "صورت"];

  const toggleField = (value: string, current: string[]) => {
    return current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
  };

  const onSubmit = (data: SutureValues) => {
    if (data.area.length > 0) {
      onClick(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 text-neutral-500">
      <h3 className="font-medium">نواحی بخیه پوستی را مشخص کنید</h3>

      <Controller
        name="area"
        control={control}
        render={({ field }) => (
          <div
            className="grid grid-cols-3 gap-2 text-sm"
            style={{ gridTemplateRows: "repeat(1, 56px)" }}
          >
            {sutureFields.map((fieldValue) => {
              const isSelected = field.value.includes(fieldValue);
              return (
                <div
                  key={fieldValue}
                  onClick={() => field.onChange(toggleField(fieldValue, field.value))}
                  className={`cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center ${
                    isSelected ? "bg-secondary-400 text-neutral-0" : ""
                  }`}
                >
                  {fieldValue}
                </div>
              );
            })}
          </div>
        )}
      />

      <RequestCost />

      <button
        type="submit"
        disabled={selectedFields.length === 0}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </form>
  );
}
