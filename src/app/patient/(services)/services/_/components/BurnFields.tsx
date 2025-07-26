"use client";
import { useForm, Controller } from "react-hook-form";
import ToggleSwitch from "@/ui/ToggleSwitch";
import RequestCost from "./RequestCost";
import { ServiceCategoryType, SubServiceType } from "@/types/serviceTypes";
import { BurnValues } from "@/types/inputValueTypes";

type SubServiceProps = {
  subService: SubServiceType;
  serviceCategory: ServiceCategoryType;
  onClick: (data: BurnValues) => void;
};

export default function BurnFields({ onClick, subService, serviceCategory }: SubServiceProps) {
  const { register, handleSubmit, control, watch, setValue, getValues } = useForm<BurnValues>({
    defaultValues: {
      serviceCategory,
      subServiceId: subService._id,
      subServiceName: subService.name,
      area: [],
      needSupplies: false,
      supplyDetails: "",
    },
  });

  const selectedAreas = watch("area");
  const needSupplies = watch("needSupplies");

  const toggleArea = (area: string) => {
    const current = getValues("area");
    const updated = current.includes(area) ? current.filter((a) => a !== area) : [...current, area];
    setValue("area", updated);
  };

  const submitHandler = (data: BurnValues) => {
    onClick(data);
  };

  if (!subService.price.options) return null;
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col gap-4 text-neutral-500"
    >
      <h3 className="font-medium">نواحی سوختگی را مشخص کنید</h3>

      <div
        className="grid grid-cols-4 gap-2 text-sm border-b pb-4"
        style={{ gridTemplateRows: "repeat(2, 56px)" }}
      >
        {subService.price.options.map((option) => (
          <div
            key={option._id}
            onClick={() => toggleArea(option.label)}
            className={`${
              selectedAreas.includes(option.label) ? "bg-secondary-400 text-neutral-0" : ""
            } cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center`}
          >
            {option.label}
          </div>
        ))}
      </div>
      <div className="w-full">
        <Controller
          name="needSupplies"
          control={control}
          render={({ field }) => (
            <ToggleSwitch
              label="لوازم پانسمان احتیاج دارم"
              onChange={(val) => field.onChange(val)}
              checked={field.value}
            />
          )}
        />
      </div>
      {needSupplies && (
        <div className="w-full">
          <textarea
            {...register("supplyDetails")}
            placeholder="لوازم مورد نیاز"
            className="outline-none text-sm placeholder:text-neutral-200 placeholder:text-sm resize-none w-full h-24 focus:border-primary-500  p-4 border border-neutral-200 rounded-primary-1"
          />
        </div>
      )}

      <RequestCost price={subService.price} values={selectedAreas}  />

      <button
        type="submit"
        disabled={selectedAreas.length === 0}
        className="h-12 rounded-primary-2 disabled:bg-primary-50 w-full bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست‌ها
      </button>
    </form>
  );
}
