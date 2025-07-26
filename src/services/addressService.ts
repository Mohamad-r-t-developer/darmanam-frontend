import { PatientAddressValues } from "@/types/addressTypes";
import http from "./httpService";

export async function getAllAddressApi() {
  return http.get("/address/all").then((data) => data.data);
}

export async function addAddressApi(data: PatientAddressValues) {
  return http.post("/address/add", data).then((data) => data.data);
}

export async function deleteAddressApi(addressId: string) {
  return http.delete(`/address/${addressId}`).then((data) => data.data);
}
