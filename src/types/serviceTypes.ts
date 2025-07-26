export type ServiceCategoryType = "DRESSING" | "INJECTION" | "CHECKUP" | "ADVANCED_CARE";
export type ServiceStatusType = "active" | "deactive";

export type SubServiceFieldType = [
  {
    type: "SELECT" | "NUMBER";
    name: "area" | "woundLength" | "count";
    label: string;
    multiple: boolean;
    required: boolean;
    meta?: {
      unitLength: number;
    };
  },
];

export type SubServicePricingType = {
  type: "SELECT_BASED" | "PER_UNIT";
  unitPrice?: number;
  value?: number;
  options?: {
    label: string;
    price: number;
    _id: string;
  }[];
};

export type MainServiceType = {
  _id: string;
  key: string;
  name: string;
  category: ServiceCategoryType;
  children: SubServiceType[];
  icon: string;
};

export type SubServiceType = {
  _id: string;
  key: string;
  name: string;
  category: ServiceCategoryType;
  fields: SubServiceFieldType[];
  price: SubServicePricingType;
  status: ServiceStatusType;
  parent: string;
};

export type GetAllServicesResponse = {
  data: MainServiceType[];
  message: string;
  statusCode: number;
};
