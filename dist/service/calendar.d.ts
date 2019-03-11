import ClubHubClient from '../client';
import Response from '../models/response';
import Calendar from '../models/calendar';
import Request from '../models/request';
import Event from '../models/event';
export default class CalendarService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getCalendars: (groupID?: string | undefined) => Promise<Response.Calendar>;
    getCalendarById: (Id?: string | undefined) => Promise<Calendar.Model>;
    getBookableSlots: (date: string, calendarIDs: string[]) => Promise<Calendar.BookableResponse[]>;
    postBookableSlot: (body: Request.ReservationPost) => Promise<Event.Model>;
}
