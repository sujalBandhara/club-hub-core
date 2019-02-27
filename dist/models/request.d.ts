import Message from 'src/models/message';
import Event from 'src/models/event';
declare namespace Request {
    interface GetQuery {
        limit?: string;
        offset?: string;
        start?: string;
        end?: string;
    }
    interface Event extends GetQuery {
        groupID?: string;
    }
    interface Member extends GetQuery {
        clubID: string;
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
