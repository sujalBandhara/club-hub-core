// External Dependencies
import * as axios from 'axios'

// Client.
import ClubHubClient from 'src/client'

// Local Namespace
import User from 'src/models/user'
import Response from 'src/models/response'
import Request from 'src/models/request'

/**
 * Interface to the ClubHub `Member` API.
 */
export default class MemberService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * `GET` all the Members for a given club Id.
   */
  public getMembers = async (memberQuery: Request.Member): Promise<Response.User> => {
    const query: axios.AxiosRequestConfig = {
      params: memberQuery
    }
    return this.client.get('users', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` a single member for the given Id.
   */
  public getMemberById = async (Id: string): Promise<User.Model> => {
    return this.client.get(`users/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` a single member for the given Id.
   */
  public postMember = async (member: User.Model): Promise<void> => {
    return this.client.post(`register`, member).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `DELETE` the Member data for the given Id.
   */
  public deleteMember = async (Id: string): Promise<void> => {
    return this.client.delete(`users/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
