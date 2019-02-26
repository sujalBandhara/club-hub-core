import ClubHubClient from '../client';
import UserService from './user';
import ClubService from './club';
import CalendarService from './calendar';
import EventService from './event';
import MenuService from './menu';
import PostService from './post';
import MemberService from './member';
export default class ClubHubService {
    client: ClubHubClient;
    users: UserService;
    members: MemberService;
    clubs: ClubService;
    calendars: CalendarService;
    events: EventService;
    menus: MenuService;
    post: PostService;
    constructor(baseURL: string, token: string);
}
