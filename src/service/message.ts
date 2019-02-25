// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Message from 'src/models/message'

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
  public getMessages = async (type?: Message.DeliveryType, limit?: string, offset?: string, start?: string, end?: string): Promise<Message.Model> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        deliveryType: type,
        limit: limit ? limit : 0,
        offset: offset,
        start: start,
        end: end
      }
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
