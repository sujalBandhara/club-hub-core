// Internal Namespaces
import Calendar from './calendar'
import Message from './message'
import Section from './section'
import Event from './event'
import User from './user'
import Post from './post'

namespace Response {

  // --------------------------------
	// Server Responses
	// ---------------------------------

  interface PaginatedResponse {
    count: number
  }

  export interface Event extends PaginatedResponse {
    events: Event.Model[]
  }

  export interface User extends PaginatedResponse {
    users: User.Model[]
  }

  export interface Post extends PaginatedResponse {
    posts: Post.Model[]
  }

  export interface Calendar extends PaginatedResponse {
    calendars: Calendar.Model[]
  }

  export interface Message extends PaginatedResponse {
    messages: Message.Model[]
  }

  export interface Section extends PaginatedResponse {
    sections: Section.Model[]
  }

}

export default Response
