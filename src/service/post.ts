// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Post from 'src/models/post'

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
  public getPosts = async (limit?: string, offset?: string, start?: string, end?: string): Promise<Post.Response> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        limit: limit ? limit : 0,
        offset: offset,
        start: start,
        end: end
      }
    }
    return this.client.get('posts', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` posts for the given parameters.
   */
  public getPost = async (Id: string): Promise<Post.Response> => {
    return this.client.get(`posts/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
