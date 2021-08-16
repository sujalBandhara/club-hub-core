import Event from './event';
import User from './user';
import Post from './post';
import Club from './club';
import Section from './section';
import Calendar from './calendar';
import Restaurant from './restaurant';
import NotificationPreference from './notificationPreference';
declare namespace Response {
    interface PaginatedResponse {
        count: number;
    }
    export interface Event extends PaginatedResponse {
        events: Event.Model[];
    }
    export interface User extends PaginatedResponse {
        users: User.Model[];
    }
    export interface Post extends PaginatedResponse {
        posts: Post.Model[];
    }
    export interface Calendar extends PaginatedResponse {
        calendars: Calendar.Model[];
    }
    export interface NonAdminStateResponse {
        club: Club.Model;
        user: User.Model;
        users: User.Model[];
        restaurants: Restaurant.Model[];
        calendars: Calendar.Model[];
        sections: Section.Model[];
    }
    export interface AdminStateResponse {
        user: User.Model;
        club: Club.Model;
        calendars: Calendar.Model[];
        admins: User.Model[];
        members: User.Model[];
        restaurants: Restaurant.Model[];
    }
    export interface NotificationPreferenceResponse {
        global?: NotificationPreference.Model;
        groupInfo: UserGroupInfo[];
    }
    export interface UserGroupInfo {
        group: User.UserGroup;
        notificationPreference?: NotificationPreference.GroupModel;
    }
    export {};
}
export default Response;
