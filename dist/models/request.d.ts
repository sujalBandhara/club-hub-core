import Message from './message';
import Event from './event';
import { Types } from 'mongoose';
declare namespace Request {
    interface GetSubDocument {
        modelID: string;
        path: string;
        subDocumentID: string;
    }
    interface GetQuery {
        limit: string;
        offset?: string;
        start?: string;
        end?: string;
    }
    interface Event extends GetQuery {
        groupID?: string;
        calendarIDs?: string[];
    }
    interface Member extends GetQuery {
        clubID: Types.ObjectId;
    }
    interface Message extends GetQuery {
        type?: Message.DeliveryType;
    }
    interface LoginPost {
        email: string;
        password: string;
        club: string;
    }
    interface ReservationPost {
        calendarID: string;
        reservation: Event.Reservation;
        startTime: string;
        endTime?: string;
    }
    interface RSVPPost {
        reservation: Event.Reservation;
    }
}
export default Request;
