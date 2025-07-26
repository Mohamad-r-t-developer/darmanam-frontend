import { addAddressApi, deleteAddressApi, getAllAddressApi } from "@/services/addressService";
import { GetAllAddressResponse } from "@/types/addressTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// get all address
export const useAddress = () =>
  useQuery<GetAllAddressResponse>({
    queryKey: ["get-all-address"],
    queryFn: getAllAddressApi,
  });

// add address
export const useAddAddress = () =>
  useMutation({
    mutationKey: ["add-address"],
    mutationFn: addAddressApi,
  });

// remove single address
export const useDeleteAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteAddressApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-all-address"] }); // رفرش لیست آدرس‌ها
    },
  });
};
