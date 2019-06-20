// External Dependencies
import * as axios from 'axios'
import { AxiosPromise } from 'axios'

// Client
import ClubHubClient from '../client'
import Club from '../models/club'

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
    public getClubs = (): AxiosPromise<Club.UnprotectedModel[]> => {
        return this.client.get('/clubs')
    }

    /**
     * Fetches all clubs. 
     */
    public getPublicClubInfo = (domain: string): AxiosPromise<Club.PublicClubInfo> => {
        return this.client.get(`/clubs/${domain}`)
    }
}
