import WondFields from "./WondFields";
import BurnFields from "./BurnFields";
import SutureFields from "./SutureFields";
import { BurnValues, SutureValues, WoundValues } from "@/types/inputValueTypes";
import { ServiceCategoryType, SubServiceType } from "@/types/serviceTypes";

type DressingFieldsProps = {
  subService: SubServiceType;
  serviceCategory: ServiceCategoryType;
  onClick: (data: WoundValues | BurnValues | SutureValues) => void;
};

export default function DressingFields({
  subService,
  onClick,
  serviceCategory,
}: DressingFieldsProps) {
  if (
    subService.name === "محل جراحی" ||
    subService.name === "زخم دیابتی" ||
    subService.name === "زخم بستر" ||
    subService.name === "کشیدن بخیه"
  ) {
    return (
      <WondFields
        serviceCategory={serviceCategory}
        subService={subService}
        countStep={subService.name === "محل جراحی" || subService.name === "زخم بستر" ? 5 : 1}
        onClick={onClick}
      />
    );
  }

  if (subService.name === "سوختگی") {
    return (
      <BurnFields serviceCategory={serviceCategory} subService={subService} onClick={onClick} />
    );
  }

  // بخیه پوست
  return (
    <SutureFields serviceCategory={serviceCategory} subService={subService} onClick={onClick} />
  );
}
