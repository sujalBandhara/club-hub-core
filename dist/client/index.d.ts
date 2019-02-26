import * as axios from 'axios';
export default class ClubHubClient {
    axios: axios.AxiosInstance;
    shouldRetry: boolean;
    baseURL: string;
    constructor(baseURL: string, token: string);
    setToken: (token: string) => void;
    get: (url: string, config?: axios.AxiosRequestConfig | undefined) => axios.AxiosPromise<any>;
    post: (url: string, data?: any, config?: axios.AxiosRequestConfig | undefined) => axios.AxiosPromise<any>;
    put: (url: string, data?: any, config?: axios.AxiosRequestConfig | undefined) => axios.AxiosPromise<any>;
    delete: (url: string, config?: axios.AxiosRequestConfig | undefined) => axios.AxiosPromise<any>;
    private responseHandler;
    private errorHandler;
}
