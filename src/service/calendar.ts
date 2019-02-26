// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'

// Local Namespace
import Response from 'src/models/response'
import Calendar from 'src/models/calendar'
import Request from 'src/models/request'

/**
 * Interface to the ClubHub `Calendar` API.
 */
export default class CalendarService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * `GET` all the calendars for a given calendar group.
   */
  public getCalendars = async (groupID?: string): Promise<Response.Calendar> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        groupID: groupID
      }
    }
    return this.client.get('calendars', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` all the calendars for a given calendar group.
   */
  public getBookableSlots = async (date: string, calendarIDs: string[]): Promise<Calendar.BookableResponse> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        date: date,
        calendarIDs: calendarIDs
      }
    }
    return this.client.get('calendars/available', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` data needed to make a reservation.
   */
  public postBookableSlot = async (body: Request.ReservationPost): Promise<void> => {
    return this.client.post(`calendars/${body.calendarID}/reserve`, body).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
