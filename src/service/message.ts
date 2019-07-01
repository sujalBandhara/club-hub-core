// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Message from '../models/message'
import Notification from '../models/notification'
import Request from '../models/request'

interface NotificationResponse {
	count: number
	notifications: Notification.Model[]
}

/**
 * Interface to the ClubHub `Message` API.
 */
export default class MessageService {

	/**
	 * The `ClubHubClient` instance for the service. 
	 */
	public client: ClubHubClient

	constructor(client: ClubHubClient) {
		this.client = client
	}

	//-------------------------------------------
	// Message Requests
	//-------------------------------------------

	/**
	 * `GET` all the Messages for a given delivery type.
	 */
	public getMessages = async (messageRequest: Request.Message): Promise<Message.Model> => {
		const query: axios.AxiosRequestConfig = {
			params: messageRequest
		}
		return this.client.get('messages', query).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * `POST` a new message with the data provided.
	 */
	public postMessage = async (message: Message.Model): Promise<void> => {
		return this.client.post('messages', message).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * `PUT` an update for an existing message.
	 */
	public putMessage = async (message: Message.Model): Promise<void> => {
		return this.client.put(`messages/${message._id}`, message).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * `DELETE` an existing message.
	 */
	public deleteMessage = async (message: Message.Model): Promise<void> => {
		return this.client.delete(`messages/${message._id}`).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	//-------------------------------------------
	// Notification Requests
	//-------------------------------------------

	/**
	 * `GET` all notifications for a user, optionally supplying a type.
	 */
	public getNotifications = async (type: Message.DeliveryType): Promise<axios.AxiosResponse> => {
		const query: axios.AxiosRequestConfig = {
			params: { method: type }
		}
		return this.client.get('notifications', query)
	}

	/**
	 * `POST` a new message with the data provided.
	 */
	public createNotification = async (notif: Notification.Model): Promise<axios.AxiosResponse> => {
		return this.client.post('notifications', notif)
	}

	/**
	 * `DELETE` marks an existing notification as deleted.
	 */
	public deleteNotification = async (notificationID: string): Promise<axios.AxiosResponse> => {
		return this.client.delete(`notifications/${notificationID}`)
	}
}
