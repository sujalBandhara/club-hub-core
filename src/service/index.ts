import ClubHubClient from '../client'

// Services 
import UserService from './user'
import ClubService from './club'
import CalendarService from './calendar'
import EventService from './event'
import MenuService from './menu'
import PostService from './post'

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

    /**
     * Interface to the Calendars API.
     */
    public calendars: CalendarService

    /**
     * Interface to the Events API.
     */
    public events: EventService

    /**
     * Interface to the Menus API.
     */
    public menus: MenuService

    /**
     * Interface to the Posts API.
     */
    public post: PostService

    constructor(baseURL: string, token: string) {
        this.client = new ClubHubClient(baseURL, token)

        // Service Setup
        this.users = new UserService(this.client)
        this.clubs = new ClubService(this.client)
        this.calendars = new CalendarService(this.client)
        this.events = new EventService(this.client)
        this.menus = new MenuService(this.client)
        this.post = new PostService(this.client)
    }
}