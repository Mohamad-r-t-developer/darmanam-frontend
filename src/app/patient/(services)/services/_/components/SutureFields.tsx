import { useForm, Controller } from "react-hook-form";
import RequestCost from "./RequestCost";
import { ServiceCategoryType, SubServiceType } from "@/types/serviceTypes";
import { SutureValues } from "@/types/inputValueTypes";

type SubServiceProps = {
  onClick: (data: SutureValues) => void;
  serviceCategory: ServiceCategoryType;
  subService: SubServiceType;
};

export default function SutureFields({ onClick, subService, serviceCategory }: SubServiceProps) {
  const { handleSubmit, watch, getValues, setValue } = useForm<SutureValues>({
    defaultValues: {
      serviceCategory,
      subServiceId: subService._id,
      subServiceName: subService.name,
      area: [],
    },
  });

  const selectedAreas = watch("area");

  const toggleArea = (area: string) => {
    const current = getValues("area");
    const updated = current.includes(area) ? current.filter((a) => a !== area) : [...current, area];
    setValue("area", updated);
  };

  const onSubmit = (data: SutureValues) => {
    if (data.area.length > 0) {
      onClick(data);
    }
  };

  if (!subService.price.options) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 text-neutral-500">
      <h3 className="font-medium">نواحی بخیه پوستی را مشخص کنید</h3>
      <div
        className="grid grid-cols-3 gap-2 text-sm"
        style={{ gridTemplateRows: "repeat(1, 56px)" }}
      >
        {subService.price.options.map((option) => (
          <div
            key={option._id}
            onClick={() => toggleArea(option.label)}
            className={`cursor-pointer border border-neutral-200 rounded-primary-2 flex items-center justify-center ${
              selectedAreas.includes(option.label) ? "bg-secondary-400 text-neutral-0" : ""
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>

      <RequestCost price={subService.price} values={selectedAreas} />

      <button
        type="submit"
        disabled={selectedAreas.length === 0}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </form>
  );
}
