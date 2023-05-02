import { axiosInstance } from "../../helpers/axiosInterceptor";

export const getAutocompleteAddress = (data: string) => {
  return axiosInstance.get(`geolocation/autocomplete?Text=${data}`);
};
