import * as axios from 'axios'

// Client
import ClubHubClient from '../client'
import Club from 'src/models/club'

/**
 * Interface to the ClubHub `Clubs` API.
 */
export default class ClubService {

    /**
     * The `ClubHubClient` instance for the service. 
     */
    public client: ClubHubClient

    constructor(client: ClubHubClient) {
        this.client = client
    }

    /**
     * Fetches all clubs. 
     */
    public getClubs = async (): Promise<Club.UnprotectedModel[]> => {
        return this.client.get('clubs').then((response: axios.AxiosResponse) => {
            return response.data
        })
    }
}
