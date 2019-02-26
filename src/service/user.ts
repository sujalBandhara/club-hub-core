// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'

// Local Namespace
import Session from 'src/models/session'
import User from 'src/models/user'
import Request from 'src/models/request'

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
	 * `POST` an email, password, and ClubName to authenticate a User. This
	 * will return the `Login` response.
	 * @param {string} email
	 * @param {string} password
	 */
	public login = async (email: string, password: string, clubName: string): Promise<Session.Login> => {
		const request: Request.LoginPost = {
			email: email,
			password: password,
			club: clubName
		}
		return this.client.post('login', request).then((response: axios.AxiosResponse) => {
			return response.data
		})
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
