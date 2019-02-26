import Calendar from './calendar';
import Message from './message';
import Section from './section';
import Event from './event';
import User from './user';
import Post from './post';
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
    interface Message extends PaginatedResponse {
        messages: Message.Model[];
    }
    interface Section extends PaginatedResponse {
        sections: Section.Model[];
    }
}
export default Response;
