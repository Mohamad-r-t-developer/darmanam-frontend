import { ServiceCategoryType, SubServiceType } from "./serviceTypes";

type CommonValuesType = {
  serviceId: string;
  serviceCategory: ServiceCategoryType;
  subService: SubServiceType;
  needSupplies: boolean;
  supplyDetails: string;
};

export type WoundValues = CommonValuesType & { woundLength: number };

export type BurnValues = CommonValuesType & {
  area: string[];
};

export type InjectionValues = CommonValuesType & {
  count: number;
};
