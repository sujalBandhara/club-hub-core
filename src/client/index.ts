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

	public headers: axios.AxiosRequestConfig

	constructor(baseURL: string, token: string) {
		this.shouldRetry = true
		this.baseURL = baseURL
		this.headers = {
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token
			}
		}
		this.axios = Axios.create({ baseURL: baseURL })
		// this.setToken(token)
		this.axios.interceptors.response.use(this.responseHandler, this.errorHandler)
	}

	/**
	 * Sets the underlying authentication token.
	 */
	public setToken = (token: string) => {
		this.axios.defaults.headers.common['Authorization'] = token
	}

	/**
	 * Get Requests
	 */
	public get = (url: string, config?: axios.AxiosRequestConfig) => {
		const headerCopy: axios.AxiosRequestConfig = {
			...this.headers,
			params: config ? config!.params : {}
		}
		console.log('The headers? ', this.headers)
		return this.axios.get(`${this.baseURL}${url}`, headerCopy)
	}

	/**
	 * Post Requests
	 */
	public post = (url: string, data?: any, config?: axios.AxiosRequestConfig) => {
		return this.axios.post(`${this.baseURL}${url}`, data, this.headers)
	}

	/**
	 * Post Requests
	 */
	public put = (url: string, data?: any, config?: axios.AxiosRequestConfig) => {
		return this.axios.put(`${this.baseURL}${url}`, data, this.headers)
	}

	/**
	 * Post Requests
	 */
	public delete = (url: string, config?: axios.AxiosRequestConfig) => {
		return this.axios.delete(`${this.baseURL}${url}`, this.headers)
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
		throw error
	}

}
