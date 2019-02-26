// External Dependencies
import * as axios from 'axios'

// Client
import ClubHubClient from '../client'

// Local Namespace.
import Event from 'src/models/event'
import User from 'src/models/user'
import Response from 'src/models/response'
import Request from 'src/models/request'

/**
 * Interface to the ClubHub `Event` API.
 */
export default class EventService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * `GET` all the Events for the given calendar groupID.
   */
  public getEvents = async (eventRequest: Request.Event): Promise<Response.Event> => {
    const query: axios.AxiosRequestConfig = {
      params: eventRequest
    }
    return this.client.get('events', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` all the events the current user is attending.
   */
  public getEventsAttending = async (groupID: string): Promise<Response.Event> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        groupID: groupID ? groupID : null
      }
    }
    return this.client.get('events/attending', query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `GET` all the Events for the given calendar groupID.
   */
  public getEvent = async (Id: string): Promise<Event.Model> => {
    return this.client.get(`events/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` a new event.
   */
  public postEvent = async (event: Event.Model): Promise<void> => {
    return this.client.post('events', event).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `PUT` updated info for an Event.
   */
  public putEvent = async (event: Event.Model): Promise<Event.Model> => {
    return this.client.put(`events/${event._id}`, event).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `DELETE` an Event.
   */
  public deleteEvent = (Id: string): Promise<void> => {
    return this.client.delete(`events/${Id}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` an RSVP for an event.
   */
  public postRSVP = async (eventId: string, user: User.Model): Promise<void> => {
    const postBody = {
      reservation: {
        creator: user._id,
        participants: [{
          userID: user._id,
          name: `${user.firstName} ${user.lastName}`,
          rsvp: true
        }]
      }
    }
    return this.client.post(`events/${eventId}/rsvp`, postBody).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `DELETE` an existing RSVP.
   */
  public deleteRSVP = async (eventId: string, reservationId: string): Promise<void> => {
    return this.client.delete(`events/${eventId}/rsvp/${reservationId}`).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
