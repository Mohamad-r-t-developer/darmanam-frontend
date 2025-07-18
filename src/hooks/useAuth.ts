import { getPatientInfoApi } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () =>
  useQuery({
    queryKey: ["get-user"],
    queryFn: getPatientInfoApi,
    retry: false,
    refetchOnWindowFocus: true,
  });
