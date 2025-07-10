import * as yup from "yup";

export const sendCodeSchema = yup
  .object({
    phoneNumber: yup
      .string()
      .required("لطفا شماره موبایل را وارد کنید")
      .matches(/^9\d{9}$/, "شماره موبایل معتبر نیست"),
    terms: yup.boolean().oneOf([true], "برای ادامه باید قوانین را بپذیرید").required(),
  })
  .required();

export const verifyCodeSchema = yup
  .object({
    otp: yup.string().required("لطفا کد تائید را وارد کنید"),
  })
  .required();
