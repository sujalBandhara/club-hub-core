// External Dependencies
import * as axios from 'axios'

// Client
import Response from 'src/models/response'
import Request from 'src/models/request'
import ClubHubClient from '../client'

/**
 * Interface to the ClubHub `Post` API.
 */
export default class PostService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * `GET` posts for the given parameters.
   */
  public getPosts = async (postRequest: Request.GetQuery): Promise<Response.Post> => {
    const query: axios.AxiosRequestConfig = {
      params: postRequest
    }
    return this.client.get('posts', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` posts for the given parameters.
   */
  public getPost = async (Id: string): Promise<Response.Post> => {
    return this.client.get(`posts/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
