// External Dependencies
import * as axios from 'axios'

// Client.
import ClubHubClient from '../client'

// Local Namespace
import User from '../models/user'

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
