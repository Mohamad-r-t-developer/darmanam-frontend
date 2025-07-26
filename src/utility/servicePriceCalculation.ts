import { SubServicePricingType } from "@/types/serviceTypes";

export default function servicePriceCalculation(
  price: SubServicePricingType,
  values: string[] | number
) {
  let totalPrice = 0;
  switch (price.type) {
    case "PER_UNIT": {
      if (typeof values === "number" && price.value) {
        totalPrice = Number(values * price.value);
        return totalPrice;
      }
    }

    case "SELECT_BASED": {
      if (typeof values !== "number")
        values.map((v) => {
          const valuePrice = price.options?.find((option) => option.label === v);
          if (valuePrice) totalPrice += valuePrice?.price;
        });
      return totalPrice;
    }
    
  }
}
