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
    interface Event extends PaginatedResponse {
        events: Event.Model[];
    }
    interface User extends PaginatedResponse {
        users: User.Model[];
    }
    interface Post extends PaginatedResponse {
        posts: Post.Model[];
    }
    interface Calendar extends PaginatedResponse {
        calendars: Calendar.Model[];
    }
    interface NonAdminStateResponse {
        club: Club.Model;
        user: User.Model;
        users: User.Model[];
        restaurants: Restaurant.Model[];
        calendars: Calendar.Model[];
        sections: Section.Model[];
    }
    interface AdminStateResponse {
        user: User.Model;
        club: Club.Model;
        calendars: Calendar.Model[];
        admins: User.Model[];
        members: User.Model[];
        restaurants: Restaurant.Model[];
    }
    interface UserGroupResponse {
        global?: NotificationPreference.Model;
        groupInfo: UserGroupInfo[];
    }
    interface UserGroupInfo {
        group: User.UserGroup;
        notificationPreference?: NotificationPreference.GroupModel;
    }
}
export default Response;
