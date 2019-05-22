import Message from './message'
import Event from './event'

namespace Request {

  export interface GetQuery {
    limit?: string
    offset?: string
    start?: string
    end?: string
  }

  export interface Event extends GetQuery {
    groupID?: string
  }

  export interface Member extends GetQuery {
    clubID: string
  }

  export interface Message extends GetQuery {
    type?: Message.DeliveryType
  }

  export interface LoginPost {
    email: string
    password: string
    club: string
  }

  export interface ReservationPost {
    calendarID: string
    reservation: Event.Reservation
    startTime: string
    endTime?: string
  }

  export interface RSVPPost {
    reservation: Event.Reservation
  }

}

export default Request
