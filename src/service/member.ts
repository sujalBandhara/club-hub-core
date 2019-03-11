// External Dependencies
import * as axios from 'axios'
const FormData = require('form-data')

// Client.
import ClubHubClient from '../client'

// Local Namespace
import User from '../models/user'
import Response from '../models/response'

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
   * `GET` all members.
   */
  public getMembers = async (): Promise<Response.User> => {
    return this.client.get(`users`).then((response: axios.AxiosResponse) => {
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
   * `PUT` an update to a single member for the given Id.
   */
//   public putMemberById = async (Id: string, user: User.Model): Promise<User.Model> => {
	public putMemberById = async (Id: string, user: any): Promise<User.Model> => {
	const putPayload = JSON.stringify(user)

	// var opts ={
	// 	  image: user.image,
	// 	  user: {firstName: 'bobby'}
	// 	}

	// console.log('hit with user : ', user)

	// const form = new FormData()
	// form.append('image', user.image)
	// form.append('user', user.user)

	// console.log('what is form : ', form)


    return this.client.put(`users/${Id}`, user).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` a single member for the given Id.
   */
  public postMember = async (member: User.Model): Promise<void> => {
	const postPayload = JSON.stringify(member)
    return this.client.post(`register`, postPayload).then((response: axios.AxiosResponse) => {
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
