// تایپ پایه‌ای که در فرم‌ها و جاهای مختلف استفاده می‌شه
export type PatientAddressValues = {
  title: string;
  fullAddress: string;
  addressDetails: string;
  lat: number;
  lng: number;
};

// تایپ آدرس کامل که از سمت سرور یا دیتابیس میاد
export type GetAddressType = PatientAddressValues & {
  _id: string;
  userId: string;
  selectedAsDefault: boolean;
};

export type GetAllAddressResponse = {
  data: GetAddressType[];
  message: string;
};
