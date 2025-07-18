import http from "./httpService";

export async function getAllServicesApi() {
  return http.get("/service").then((data) => data.data);
}
