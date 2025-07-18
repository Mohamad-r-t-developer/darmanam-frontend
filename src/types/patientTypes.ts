export type AddPatientValues = {
  nationalCode: string;
  fullName: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
  age: number;
};

export type PatientInfoValues = {
  nationalCode: string;
  fullName: string;
  gender: "MALE" | "FEMALE";
  age: number;
  foodAllergy: {
    choice: boolean;
    text?: string;
  };
  drugAllergy: {
    choice: boolean;
    text?: string;
  };
  medicalFiles?: FileList;
  patientHistory: string;
};

export type PatientAddressValues = {
  title: string;
  address: string;
  addressDetail: string;
  lat: number;
  lng: number;
};
