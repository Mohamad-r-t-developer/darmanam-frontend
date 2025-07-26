import { AddSvg, MinusSvg } from "@/ui/icon";
import ToggleSwitch from "@/ui/ToggleSwitch";
import { useEffect } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import RequestCost from "./RequestCost";
import { ServiceCategoryType, SubServiceType } from "@/types/serviceTypes";
import { WoundValues } from "@/types/inputValueTypes";

export default function WondFields({
  subService,
  serviceCategory,
  onClick,
  countStep,
}: {
  subService: SubServiceType;
  serviceCategory: ServiceCategoryType;
  onClick: (data: WoundValues) => void;
  countStep: number;
}) {
  const step = countStep || 1;

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isValid },
  } = useForm<WoundValues>({
    defaultValues: {
      subServiceName: subService.name,
      subServiceId: subService._id,
      serviceCategory,
      woundLength: step,
      needSupplies: false,
      supplyDetails: "",
    },
  });

  const woundLength = useWatch({ control, name: "woundLength" });
  const needSupplies = watch("needSupplies");

  // واکنش به تغییر countStep
  useEffect(() => {
    reset({
      subServiceName: subService.name,
      subServiceId: subService._id,
      serviceCategory,
      woundLength: step,
      needSupplies: false,
      supplyDetails: "",
    });
  }, [subService, serviceCategory, step, reset]);

  const increase = () => {
    if (woundLength < 200) setValue("woundLength", woundLength + step);
  };

  const decrease = () => {
    if (woundLength > step) setValue("woundLength", woundLength - step);
  };

  const submitHandler = (data: WoundValues) => {
    onClick(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col gap-4 text-neutral-500"
    >
      {/* طول زخم */}
      <div className="w-full flex items-center justify-between text-sm font-medium">
        <label htmlFor="woundLength">{`میزان ${subService.name} را مشخص کنید`}</label>
        <div className="flex items-center justify-center gap-2 py-2 border border-neutral-200 rounded-primary-2">
          <button onClick={increase} type="button" className="px-2">
            <AddSvg className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <span>cm</span>
            <span>{woundLength}</span>
          </div>
          <button onClick={decrease} type="button" className="px-2">
            <MinusSvg className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* نیاز به لوازم پانسمان */}
      <div className="w-full">
        <Controller
          control={control}
          name="needSupplies"
          render={({ field }) => (
            <ToggleSwitch
              label="لوازم پانسمان احتیاج دارم"
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {/* متن لوازم مورد نیاز */}
      {needSupplies && (
        <div className="w-full">
          <Controller
            control={control}
            name="supplyDetails"
            rules={{ required: "لطفاً لوازم مورد نیاز را وارد کنید" }}
            render={({ field, fieldState }) => (
              <>
                <textarea
                  {...field}
                  placeholder="لوازم مورد نیاز"
                  className={`${fieldState.error ? "border-tertiary-400" : "border-neutral-200 focus:border-primary-500"} outline-none text-sm placeholder:text-neutral-200 placeholder:text-sm resize-none w-full h-24   p-4 border  rounded-primary-1`}
                />
                {fieldState.error && (
                  <p className="text-tertiary-400 text-xs mt-1">{fieldState.error.message}</p>
                )}
              </>
            )}
          />
        </div>
      )}

      <RequestCost price={subService.price} values={woundLength} />

      {/* دکمه افزودن به سبد */}
      <button
        type="submit"
        disabled={!isValid}
        className="h-12 rounded-primary-2 w-full disabled:bg-primary-50 bg-primary-500 text-[13px] font-semibold text-neutral-0"
      >
        افزودن به سبد درخواست ها
      </button>
    </form>
  );
}
