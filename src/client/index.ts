import Axios from 'axios'
import * as axios from 'axios'

/**
 * `ClubHubClient` is a thin wrapper around the Axios library. 
 */
export default class ClubHubClient {

	/**
	 * The underlying Axios instance. 
	 */
	public axios: axios.AxiosInstance

	/** 
	 * Boolean value that determines if the client should retry requests. 
	 */
	public shouldRetry: boolean

	/**
	 * Base URL for the instance. 
	 */
	public baseURL: string

	constructor(baseURL: string, token: string) {
		this.shouldRetry = true
		this.baseURL = baseURL
		const headers = {
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		this.axios = Axios.create({ url: baseURL, headers: headers })
		this.setToken(token)
		this.axios.interceptors.response.use(this.responseHandler, this.errorHandler)
	}

	/**
	 * Sets the underlying authentication token.
	 */
	public setToken = (token: string) => {
		this.axios.defaults.headers.common['Authorization'] = token;
	}

	/**
	 * Get Requests
	 */
	public get = (url: string, config?: axios.AxiosRequestConfig) => {
		return this.axios.get(`${this.baseURL}${url}`, config)
	}

	/**
	 * Post Requests
	 */
	public post = (url: string, data?: any, config?: axios.AxiosRequestConfig) => {
		return this.axios.post(`${this.baseURL}${url}`, data, config)
	}

	/**
	 * Post Requests
	 */
	public put = (url: string, data?: any, config?: axios.AxiosRequestConfig) => {
		return this.axios.put(`${this.baseURL}${url}`, data, config)
	}

	/**
	 * Post Requests
	 */
	public delete = (url: string, config?: axios.AxiosRequestConfig) => {
		return this.axios.delete(`${this.baseURL}${url}`, config)
	}

	/**
	 * Return a successful request, no need to perform any actions.
	 */
	private responseHandler = (response: any): any => {
		return response
	}

	/**
	 * TODO: Handle `401` errors and let the client know it needs
	 * to attempt a re-auth.
	 */
	private errorHandler = async (error: any): Promise<any> => {
		return error
	}

}
