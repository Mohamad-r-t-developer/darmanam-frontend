import { SubServicePricingType } from "@/types/serviceTypes";
import servicePriceCalculation from "@/utility/servicePriceCalculation";

type RequestsCostProps = {
  price: SubServicePricingType;
  values: string[] | number;
};
export default function RequestCost({ price, values }: RequestsCostProps) {
  const totalPrice = servicePriceCalculation(price, values);
  const priceNotExist = totalPrice === 0;
  return (
    <div className=" w-full flex items-center gap-1 py-2 text-xs">
      <span className="font-semibold">هزینه درخواست : </span>
      <span className={`${priceNotExist ? "text-neutral-400" : "text-secondary-400 font-bold"}`}>
        {priceNotExist
          ? "برای محاسبه هزینه لطفا سرویس موردنظر را انتخاب کنید"
          : `${totalPrice?.toLocaleString("fa-IR")} تومان`}
      </span>
    </div>
  );
}
