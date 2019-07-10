import ClubHubClient from '../client';
import Response from '../models/response';
import Calendar from '../models/calendar';
import Request from '../models/request';
export default class CalendarService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getCalendars: (groupID?: string | undefined) => Promise<Response.Calendar>;
    getBookableSlots: (date: string, calendarIDs: string[]) => Promise<Calendar.BookableResponse>;
    postBookableSlot: (body: Request.ReservationPost) => Promise<void>;
}
