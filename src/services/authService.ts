import http from "./httpService";

type RequestOTPType = {
  phoneNumber: string;
  role: "PATIENT" | "NURSE" | "ADMIN" | "SUPPORT";
};

export async function requestOTPApi(data: RequestOTPType) {
  return http.post("/auth/request-otp", data).then((data) => data.data);
}

type VerifyOTPType = {
  phoneNumber: string;
  otp: string;
};
export async function verifyOTPApi(data: VerifyOTPType) {
  return http.post("/auth/verify-otp", data).then((data) => data.data);
}

export async function getPatientInfoApi() {
  return http.get("/user/by-access-token").then((data) => data.data);
}