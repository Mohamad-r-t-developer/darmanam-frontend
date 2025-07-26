import { ServiceCategoryType } from "./serviceTypes";

export type WoundValues = {
  subServiceName: string;
  subServiceId: string;
  serviceCategory: ServiceCategoryType;
  woundLength: number;
  needSupplies: boolean;
  supplyDetails: string;
};

export type BurnValues = {
  subServiceName: string;
  subServiceId: string;
  serviceCategory: ServiceCategoryType;
  area: string[];
  needSupplies: boolean;
  supplyDetails: string;
};

export type SutureValues = {
  subServiceName: string;
  subServiceId: string;
  serviceCategory: ServiceCategoryType;
  area: string[];
};

export type InjectionValues = {
  subServiceName: string;
  subServiceId: string;
  serviceCategory: ServiceCategoryType;
  count: number;
};
