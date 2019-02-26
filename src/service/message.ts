// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Message from '../models/message'
import Request from '../models/request'
import Response from '../models/response'

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

  /**
   * `GET` all the Messages for a given delivery type.
   */
  public getMessages = async (messageRequest: Request.Message): Promise<Response.Message> => {
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

}
