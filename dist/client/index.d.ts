import { AxiosPromise, AxiosResponse } from 'axios';
import * as axios from 'axios';
export default class ClubHubClient {
    axios: axios.AxiosInstance;
    token: string;
    shouldRetry: boolean;
    baseURL: string;
    constructor(baseURL: string, token: string);
    setToken: (token: string) => void;
    get: <T>(url: string, params?: any) => AxiosPromise<T>;
    post: (url: string, data?: any, config?: axios.AxiosRequestConfig | undefined) => Promise<AxiosResponse<any>>;
    put: (url: string, data?: any, config?: axios.AxiosRequestConfig | undefined) => Promise<AxiosResponse<any>>;
    delete: (url: string, config?: axios.AxiosRequestConfig | undefined) => Promise<AxiosResponse<any>>;
    private responseHandler;
    private errorHandler;
}
