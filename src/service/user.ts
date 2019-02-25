
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'

// Interfaces 
import { LoginResponse } from '../interfaces/user'


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
   * `POST` an email and password to authenticate a User. This
   * networking function is BaseService since it's using the
   * static Axios HTTP functions.
   * @param {string} email
   * @param {string} password
   */
    public login = async (email: string, password: string, clubName: string): Promise<LoginResponse> => {
        const json = {
            email: email,
            password: password,
            club: clubName
        }
        return this.client.post('login', json).then((response: axios.AxiosResponse) => {
            return response.data
        })
    }
}
