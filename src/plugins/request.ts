import axios, { AxiosResponse } from 'axios';
import { getToken } from './local-storage';
export const authURL: string = 'https://auth.addubby.com/';

const service = axios.create({
  timeout: 5000,
});

service.interceptors.request.use(
  (config: any) => {
    if (getToken()) {
      config.headers.Authorization = 'Bearer ' + getToken();
    }
    return config;
  },
  (error: Error) => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.status !== 200) {
      console.log(response.statusText);
      return Promise.reject('error');
    } else {
      return response;
    }
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default service;
