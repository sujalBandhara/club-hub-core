// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'

// Local Namespace
import Calendar from 'src/models/calendar'
import Event from 'src/models/event'

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
  public getCalendars = async (groupID?: string): Promise<Calendar.Response> => {
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
  public postBookableSlot = async (calendarId: string, reservation: Event.Reservation, startTime: string, endTime?: string): Promise<void> => {
    const postBody = {
      startTime: startTime,
      calendarID: calendarId,
      reservation: reservation,
      endTime: endTime
    }
    return this.client.post(`calendars/${calendarId}/reserve`, postBody).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
