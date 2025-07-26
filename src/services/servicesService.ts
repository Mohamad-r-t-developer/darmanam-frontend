import { GetAllServicesResponse } from "@/types/serviceTypes";
import http from "./httpService";

export async function getAllServicesApi(): Promise<GetAllServicesResponse> {
  return http.get("/service").then((data) => data.data);
}

