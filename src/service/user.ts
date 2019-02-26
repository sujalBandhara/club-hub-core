// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'

// Local Namespace
import Session from '../models/session'
import User from '../models/user'

/**
 * Interface to the ClubHub `User` API.
 */
export default class UserService {

	/**
	 * The `ClubHubClient` instance for the service. 
	 */
	public client: ClubHubClient

	constructor(client: ClubHubClient) {
		this.client = client
	}

	/**
	 * `GET` the current state for the client. Including restaurants, users,
	 * club info, and members.
	 */
	public getState = async (): Promise<Session.State> => {
		return this.client.get('users/me').then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * `POST` a sub document for the given user. Returns the full updated
	 * User Model.
	 */
	public postSubDocument = async (userId: string, path: string, data: object): Promise<User.Model> => {
		return this.client.post(`users/${userId}/meta/${path}`, data).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * `PUT` a sub document for the given user. Returns the full updated
	 * User Model.
	 */
	public putSubDocument = async (userId: string, path: string, data: object): Promise<User.Model> => {
		const postPath: string = `users/${userId}/meta/${path}`
		return this.client.put(postPath, data).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * `DELETE` a sub document for the given user. Returns the full updated
	 * User Model.
	 */
	public deleteSubDocument = async (userId: string, path: string, data: object): Promise<User.Model> => {
		const postPath: string = `users/${userId}/meta/${path}`
		return this.client.delete(postPath, data).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

}
