import Calendar from './calendar';
import Event from './event';
import User from './user';
import Post from './post';
declare namespace Response {
    interface PaginatedResponse {
        count: number;
    }
    interface Event extends PaginatedResponse {
        events: Event.Model;
    }
    interface User extends PaginatedResponse {
        users: User.Model;
    }
    interface Post extends PaginatedResponse {
        posts: Post.Model;
    }
    interface Calendar extends PaginatedResponse {
        calendars: Calendar.Model;
    }
}
export default Response;
