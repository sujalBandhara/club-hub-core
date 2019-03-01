// External Dependencies
import * as axios from 'axios'

import ClubHubClient from '../client'

// Services
import UserService from './user'
import ClubService from './club'
import CalendarService from './calendar'
import EventService from './event'
import MenuService from './menu'
import PostService from './post'
import MemberService from './member'
import Request from '../models/request'
import Session from '../models/session'
import MessageService from './message'
import SectionService from './section'
import DeviceService from './device'

/**
 * TypeScript interface to the ClubHub REST API.
 */
export default class ClubHubService {

	/**
	 * `POST` an email, password, and ClubName to authenticate a User. This
	 * will return the `Login` response.
	 */
	public static login = async (url: string, email: string, password: string, clubName: string): Promise<Session.Login> => {
		const request: Request.LoginPost = {
			email: email,
			password: password,
			club: clubName
		}
		return axios.default.post(`${url}login`, request).then((response: axios.AxiosResponse) => {
			return response.data
		})
	}

	/**
	 * The `ClubHubClient` instance for the service. 
	 */
	public client: ClubHubClient

	/**
	 * Interface to the Users API.
	 */
	public users: UserService

	/**
	 * Interface to the Members API.
	 */
	public members: MemberService

	/**
	 * Interface to the Message API.
	 */
	public messages: MessageService


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
	 * Interface to the Section API.
	 */
	public sections: SectionService

	/**
	 * Interface to the Posts API.
	 */
	public post: PostService

	/**
	 * Interface to the Device API.
	 */
	public device: DeviceService

	constructor(baseURL: string, token: string) {
		this.client = new ClubHubClient(baseURL, token)

		// Service Setup
		this.users = new UserService(this.client)
		this.clubs = new ClubService(this.client)
		this.members = new MemberService(this.client)
		this.messages = new MessageService(this.client)
		this.calendars = new CalendarService(this.client)
		this.events = new EventService(this.client)
		this.menus = new MenuService(this.client)
		this.sections = new SectionService(this.client)
		this.post = new PostService(this.client)
		this.device = new DeviceService(this.client)
	}

}
