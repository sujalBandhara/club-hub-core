import ClubHubClient from '../client';
import Event from '../models/event';
import User from '../models/user';
import Response from '../models/response';
import Request from '../models/request';
export default class EventService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getEvents: (eventRequest: Request.Event) => Promise<Response.Event>;
    getEventsAttending: (groupID?: string | undefined) => Promise<Response.Event>;
    getEvent: (Id: string) => Promise<Event.Model>;
    postEvent: (event: Event.Model) => Promise<Event.Model>;
    putEvent: (event: Event.Model) => Promise<Event.Model>;
    deleteEvent: (Id: string) => Promise<void>;
    getSubDocument: (request: Request.GetSubDocument) => Promise<any>;
    getWithShortLink: (shortLink: string) => Promise<Event.Model>;
    postRSVP: (eventID: string, user: User.Model) => Promise<Event.Model>;
    putRSVP: (eventID: string, reservation: Event.Reservation) => Promise<Event.Model>;
    deleteRSVP: (eventID: string, reservationID: string) => Promise<void>;
}
