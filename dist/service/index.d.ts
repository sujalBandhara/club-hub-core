import ClubHubClient from '../client';
import UserService from './user';
import ClubService from './club';
import CalendarService from './calendar';
import EventService from './event';
import MenuService from './menu';
import PostService from './post';
import MemberService from './member';
import Session from '../models/session';
import MessageService from './message';
import SectionService from './section';
export default class ClubHubService {
    static login: (url: string, email: string, password: string, clubName: string) => Promise<Session.Login>;
    client: ClubHubClient;
    users: UserService;
    members: MemberService;
    messages: MessageService;
    clubs: ClubService;
    calendars: CalendarService;
    events: EventService;
    menus: MenuService;
    sections: SectionService;
    post: PostService;
    constructor(baseURL: string, token: string);
}
