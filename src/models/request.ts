import Message from 'src/models/message'
import Event from 'src/models/event'
import { Types } from 'mongoose'

namespace Request {

  export interface GetQuery {
    limit: string
    offset?: string
    start?: string
    end?: string
  }

  export interface Event extends GetQuery {
    groupID?: string
  }

  export interface Member extends GetQuery {
    clubID: Types.ObjectId
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
