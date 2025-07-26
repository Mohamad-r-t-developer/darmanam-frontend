import { ServiceCategoryType } from "./serviceTypes";

export type RequestStatusType = "pending" | "notfound" | "founded";

export type RequestItemType = {
  serviceId: string;
  serviceName: string;
  category: ServiceCategoryType;
  selectedAddress: string;
  area?: string[];
  count?: number;
  woundLength?: number;
  needSupplies?: boolean;
  supplyDetails?: string;
  scheduledAt?: string;
  reservedTime?: {
    id: string;
    label: string;
    from: string;
    to: string;
  };
  nurseGender?: "MALE" | "FEMALE";
  preferPreviousNurse?: boolean;
  isImmediate?: boolean;
};
