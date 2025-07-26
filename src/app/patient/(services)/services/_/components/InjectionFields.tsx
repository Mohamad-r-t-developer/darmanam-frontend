import { ServiceCategoryType, SubServiceType } from "@/types/serviceTypes";
import { AddSvg, MinusSvg } from "@/ui/icon";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import RequestCost from "./RequestCost";
import { InjectionValues } from "@/types/inputValueTypes";

type InjectionFieldsProps = {
  ampouleTitle: string;
  subService: SubServiceType;
  serviceCategory: ServiceCategoryType;
  onClick: (data: InjectionValues) => void;
};

export default function InjectionFields({
  ampouleTitle,
  subService,
  serviceCategory,
  onClick,
}: InjectionFieldsProps) {
  const { control, setValue, handleSubmit, watch } = useForm<InjectionValues>({
    defaultValues: {
      serviceCategory,
      subServiceId: subService._id,
      subServiceName: subService.name,
      count: 1,
    },
  });

  const ampoules = watch("count");

  useEffect(() => {
    setValue("count", 1);
  }, [subService, setValue]);

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
      <RequestCost price={subService.price} values={ampoules} />
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
