import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { AxiosClientConfig } from "../api.contants";

const AxiosClient = axios.create({
  baseURL: AxiosClientConfig.DOMAIN_API,
  headers: {
    "Content-type": AxiosClientConfig.CONTENT_TYPE,
  },
});

AxiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (localStorage.getItem("token")) {
      (config.headers as any)["Authorization"] =
        AxiosClientConfig.AUTH_TYPES + " " + localStorage.getItem("token") ||
        "";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

AxiosClient.interceptors.response.use(
  (axiosResponse: AxiosResponse<any>) => axiosResponse,
  (error) => {
    // const originalRequest = error.config;

    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
      return Promise.reject(error);
    }

    // if (error.response.status === 401 && error.response.data.error.message === 'Unauthorized') {
    //   const refreshToken = localStorage.getItem('refresh_token');

    //   if (refreshToken) {
    //     const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

    //     const now = Math.ceil(Date.now() / 1000);

    //     if (tokenParts.exp > now) {
    //       return AxiosClient.get('/refresh-token', {
    //         headers: { 'refresh-token': `Bearer ${refreshToken}` },
    //       })
    //         .then(response => {
    //           localStorage.setItem('token', response.data.payload.access_token);
    //           localStorage.setItem('refresh_token', response.data.payload.refresh_token);

    //           AxiosClient.defaults.headers['Authorization'] = `Bearer ${response.data.payload.access_token}`;
    //           originalRequest.headers['Authorization'] = `Bearer ${response.data.payload.access_token}`;

    //           return AxiosClient(originalRequest);
    //         })
    //         .catch(err => {
    //           console.log('Refresh token lỗi', err);
    //         });
    //     } else {
    //       console.log('Refresh token hết hạn', tokenParts.exp, now);
    //       window.location.href = '/login';
    //       localStorage.clear();
    //     }
    //   } else {
    //     console.log('Không có refresh token');
    //     window.location.href = '/login';
    //     localStorage.clear();
    //   }
    // }

    return Promise.reject(error.response.data);
  }
);

export default AxiosClient;
