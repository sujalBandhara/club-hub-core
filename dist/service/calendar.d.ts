import ClubHubClient from '../client';
import Response from 'src/models/response';
import Calendar from 'src/models/calendar';
import Request from 'src/models/request';
export default class CalendarService {
    client: ClubHubClient;
    constructor(client: ClubHubClient);
    getCalendars: (groupID?: string | undefined) => Promise<Response.Calendar>;
    getBookableSlots: (date: string, calendarIDs: string[]) => Promise<Calendar.BookableResponse>;
    postBookableSlot: (body: Request.ReservationPost) => Promise<void>;
}
