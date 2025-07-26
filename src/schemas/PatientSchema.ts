import { PatientAddressValues } from "@/types/addressTypes";
import { AddPatientValues, PatientInfoValues } from "@/types/patientTypes";
import isValidNationalCode from "@/utility/nationalCodeValidator";
import * as yup from "yup";

export const addPatientShema: yup.ObjectSchema<AddPatientValues> = yup
  .object({
    nationalCode: yup
      .string()
      .required("لطفا کدملی را وارد کنید")
      .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
      .test("is-valid-national-code", "کد ملی معتبر نیست", (value) =>
        value ? isValidNationalCode(value) : false
      ),
    fullName: yup.string().required("لطفا نام و نام خانوادگی رو وارد کنید"),
    gender: yup
      .mixed<"MALE" | "FEMALE">()
      .oneOf(["MALE", "FEMALE"], "جنسیت نامعتبر است")
      .required("لطف جنسیت  بیمار را انتخاب کنید"),
    phoneNumber: yup
      .string()
      .required("لطفا شماره موبایل بیمار را وارد کنید")
      .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
    age: yup
      .number()
      .typeError("سن باید عدد باشد")
      .required("لطفا سن بیمار را وارد کنید")
      .integer("سن باید عدد صحیح باشد")
      .min(0, "سن نمی‌تواند منفی باشد")
      .max(120, "سن نباید بیشتر از ۱۲۰ سال باشد"),
  })
  .required();

//
export const patientInfoSchema: yup.ObjectSchema<PatientInfoValues> = yup
  .object({
    nationalCode: yup
      .string()
      .required("لطفا کدملی را وارد کنید")
      .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
      .test("is-valid-national-code", "کد ملی معتبر نیست", (value) =>
        value ? isValidNationalCode(value) : false
      ),
    fullName: yup.string().required("لطفا نام و نام خانوادگی رو وارد کنید"),
    age: yup
      .number()
      .typeError("سن باید عدد باشد")
      .required("لطفا سن بیمار را وارد کنید")
      .integer("سن باید عدد صحیح باشد")
      .min(0, "سن نمی‌تواند منفی باشد")
      .max(120, "سن نباید بیشتر از ۱۲۰ سال باشد"),
    foodAllergy: yup
      .object({
        choice: yup.boolean().required("انتخاب الزامی است"),
        text: yup.string(),
      })
      .test("text-required-if-choice-true", "لطفا توضیحات حساسیت را وارد کنید", (value) => {
        if (!value) return false;
        if (value.choice === true && (!value.text || value.text.trim() === "")) {
          return false;
        }
        return true;
      }),
    drugAllergy: yup
      .object({
        choice: yup.boolean().required("انتخاب الزامی است"),
        text: yup.string(),
      })
      .test("text-required-if-choice-true", "لطفا توضیحات حساسیت را وارد کنید", (value) => {
        if (!value) return false;
        if (value.choice === true && (!value.text || value.text.trim() === "")) {
          return false;
        }
        return true;
      }),
    patientHistory: yup.string(),
    gender: yup
      .mixed<"MALE" | "FEMALE">()
      .oneOf(["MALE", "FEMALE"], "جنسیت نامعتبر است")
      .required("لطف جنسیت  بیمار را انتخاب کنید"),
    medicalFiles: yup.mixed<FileList>(),
  })
  .required();

export const addAddressSchema: yup.ObjectSchema<PatientAddressValues> = yup
  .object({
    title: yup
      .string()
      .min(3, "عنوان آدرس نباید کمتر از سه حرف باشد")
      .required("لطفا عنوان آدرس را وارد کنید"),
    fullAddress: yup.string().required("لطفا آدرس را وارد کنید"),
    addressDetails: yup
      .string()
      .min(5, "جزئیات آدرس نباید کمتر از 5 حرف باشد")
      .required("لطفا جزئیات آدرس را وارد کنید"),
    lat: yup.number().required("لطف لوکیشن خود را از نقشه انتخاب کنید"),
    lng: yup.number().required("لطفا لوکیشن خود را از نقشه انتخاب کنید"),
  })
  .required();
