import axios, { AxiosError, AxiosRequestConfig } from "axios";
import SecureDBGateway from "../gateways/SecureDBGateway";
import UserDBGateway from "../gateways/UserDBGateway";
let appStoreMain;

export const axiosInstance = axios.create({
  baseURL: "https://api-stage.carriera.io/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const injectStore = _store => {
	console.log(_store);
	appStoreMain = _store
}

const handleError = async (error: AxiosError) => {
  if (error.response?.data?.errorCode === "401") {
    const userData = await SecureDBGateway.get("user-data");
    const data = {
      refreshToken: userData.refreshToken,
    };

    axiosInstance
      .post("account/mobile/refresh", data)
      .then(async (res) => {
        const newData = { ...userData };
        newData.token = res.data.token;
        newData.refreshToken = res.data.refreshToken;
        await SecureDBGateway.set("user-data", newData);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(
  async (config: any | AxiosRequestConfig) => {
    const token = await UserDBGateway.getAccountToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((response) => response, handleError);
