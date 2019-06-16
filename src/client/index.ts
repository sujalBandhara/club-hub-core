import Axios from 'axios'
import { AxiosPromise, AxiosResponse } from 'axios'
import * as axios from 'axios'

// Services 
import Logger from '../util/logger';

/**
 * `ClubHubClient` is a thin wrapper around the Axios library. 
 */
export default class ClubHubClient {

	/**
	 * The underlying Axios instance. 
	 */
	public axios: axios.AxiosInstance

	/**
	 * The authentication token for the instance. 
	 */
	public token: string

	/** 
	 * Boolean value that determines if the client should retry requests. 
	 */
	public shouldRetry: boolean

	/**
	 * Base URL for the instance. 
	 */
	public baseURL: string

	constructor(baseURL: string, token: string) {
		this.token = token
		this.shouldRetry = true

		const headers = {
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		this.axios = Axios.create({ baseURL: baseURL, headers: headers })
		this.axios.interceptors.response.use(this.responseHandler, this.errorHandler)
	}

	/**
	 * Sets the underlying authentication token.
	 */
	public setToken = (token: string) => {
		this.token = token
		this.axios.defaults.headers.common['Authorization'] = token;
	}

	/**
	 * Get Requests
	 */
	public get = <T>(url: string, params?: any): AxiosPromise<T> => {
		const methodName = `[Core Axios (get)] - `
		return this.axios.get(url).then((res: AxiosResponse) => {
			if (!process.env.LOGGER_DISABLED && res.status >= 300) {
				Logger.info(`${methodName} Request ${url} returned with status: ${res.status}.`)
			}
			return res
		})
	}

	/**
	 * Post Requests
	 */
	public post = (url: string, data?: any, config?: axios.AxiosRequestConfig) => {
		const methodName = `[Core Axios (post)] - `
		return this.axios.post(url, data, config).then((res: AxiosResponse) => {
			if (!process.env.LOGGER_DISABLED && res.status >= 300) {
				Logger.info(`${methodName} Request ${url} returned with status: ${res.status}.`)
			}
			return res
		})
	}

	/**
	 * Post Requests
	 */
	public put = (url: string, data?: any, config?: axios.AxiosRequestConfig) => {
		const methodName = `[Core Axios (put)] - `
		return this.axios.put(url, data, config).then((res: AxiosResponse) => {
			if (!process.env.LOGGER_DISABLED && res.status >= 300) {
				Logger.info(`${methodName} Request ${url} returned with status: ${res.status}.`)
			}
			return res
		})
	}

	/**
	 * Post Requests
	 */
	public delete = (url: string, config?: axios.AxiosRequestConfig) => {
		const methodName = `[Core Axios (delete)] - `
		return this.axios.delete(url, config).then((res: AxiosResponse) => {
			if (!process.env.LOGGER_DISABLED && res.status >= 300) {
				Logger.info(`${methodName} Request ${url} returned with status: ${res.status}.`)
			}
			return res
		})
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
