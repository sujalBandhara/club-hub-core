import { AxiosPromise } from 'axios';
import * as axios from 'axios';
export default class ClubHubClient {
    axios: axios.AxiosInstance;
    token: string;
    shouldRetry: boolean;
    baseURL: string;
    constructor(baseURL: string, token: string);
    setToken: (token: string) => void;
    get: <T>(url: string, params?: any) => AxiosPromise<T>;
    post: <T>(url: string, data?: any, config?: axios.AxiosRequestConfig | undefined) => AxiosPromise<T>;
    put: <T>(url: string, data?: any, config?: axios.AxiosRequestConfig | undefined) => AxiosPromise<T>;
    delete: <T>(url: string, config?: axios.AxiosRequestConfig | undefined) => AxiosPromise<T>;
    private responseHandler;
    private errorHandler;
}
