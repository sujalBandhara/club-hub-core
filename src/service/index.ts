
import ClubHubClient from '../client'

// Services 
import UserService from './user'
import ClubService from './club';

/**
 * TypeScript interface to the ClubHub REST API.
 */
export default class ClubHubService {

    /**
     * The `ClubHubClient` instance for the service. 
     */
    public client: ClubHubClient

    /**
     * Interface to the Users API.
     */
    public users: UserService

    /**
     * Interface to the Clubs API.
     */
    public clubs: ClubService

    constructor(baseURL: string, token: string) {
        this.client = new ClubHubClient(baseURL, token)

        // Service Setup
        this.users = new UserService(this.client)
        this.clubs = new ClubService(this.client)
    }
}
