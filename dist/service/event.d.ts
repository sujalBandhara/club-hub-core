import ClubHubClient from '../client';
import Event from 'src/models/event';
import User from 'src/models/user';
import Response from 'src/models/response';
import Request from 'src/models/request';
export default class EventService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getEvents: (eventRequest: Request.Event) => Promise<Response.Event>;
    getEventsAttending: (groupID: string) => Promise<Response.Event>;
    getEvent: (Id: string) => Promise<Event.Model>;
    postEvent: (event: Event.Model) => Promise<void>;
    putEvent: (event: Event.Model) => Promise<Event.Model>;
    deleteEvent: (Id: string) => Promise<void>;
    postRSVP: (eventID: string, user: User.Model) => Promise<void>;
    deleteRSVP: (eventID: string, reservationID: string) => Promise<void>;
}
