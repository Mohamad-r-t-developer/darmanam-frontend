import WondFields from "./WondFields";
import BurnFields from "./BurnFields";
import SutureFields from "./SutureFields";
import { BurnValues, WoundValues } from "@/types/inputValueTypes";
import { MainServiceType, SubServiceType } from "@/types/serviceTypes";

type DressingFieldsProps = {
  subService: SubServiceType;
  mainService: MainServiceType;
  onClick: (data: WoundValues | BurnValues) => void;
};

export default function DressingFields({ subService, onClick, mainService }: DressingFieldsProps) {
  if (
    subService.name === "محل جراحی" ||
    subService.name === "زخم دیابتی" ||
    subService.name === "زخم بستر" ||
    subService.name === "کشیدن بخیه"
  ) {
    return (
      <WondFields
        mainService={mainService}
        subService={subService}
        countStep={subService.name === "محل جراحی" || subService.name === "زخم بستر" ? 5 : 1}
        onClick={onClick}
      />
    );
  }

  if (subService.name === "سوختگی") {
    return <BurnFields mainService={mainService} subService={subService} onClick={onClick} />;
  }

  // بخیه پوست
  return <SutureFields mainService={mainService} subService={subService} onClick={onClick} />;
}
