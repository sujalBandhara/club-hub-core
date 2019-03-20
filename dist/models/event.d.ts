import { Types } from 'mongoose';
import User from './user';
import Location from './subModels/shared/location';
import RichContent from './subModels/shared/richContent';
import IShared from './shared';
declare namespace Event {
    interface Model {
        _id?: Types.ObjectId;
        remoteID?: string;
        name?: string;
        start?: Date;
        end?: Date;
        creator?: Types.ObjectId | User.Model;
        rRule?: IShared.GeneralMap<any>;
        rDuration?: number;
        rDate?: string[];
        categories?: string[];
        description?: string;
        location?: Location.Model;
        calendarID?: Types.ObjectId;
        photoURL?: string;
        clubID?: Types.ObjectId;
        groupID?: Types.ObjectId;
        price?: string;
        shortLink?: string;
        reservations?: Reservation[];
        public?: boolean;
        type?: Types.ObjectId;
        richContent?: RichContent.Model;
        maxParticipants?: number;
        requiresRSVP?: boolean;
        recurring?: number;
    }
    enum RecurringFrequency {
        YEARLY = 0,
        MONTHLY = 1,
        WEEKLY = 2,
        DAILY = 3,
        HOURLY = 4,
        MINUTELY = 5,
        SECONDLY = 6
    }
    interface Reservation {
        _id?: Types.ObjectId;
        creator: Types.ObjectId | User.Model;
        participants: Participant[];
        meta?: ReservationMeta;
    }
    interface Participant {
        _id?: Types.ObjectId;
        userID: Types.ObjectId | User.Model | null;
        name: string;
        rsvp?: boolean;
        paid?: boolean;
    }
    type ReservationMeta = ReservationBaseMeta | CarReservationMeta;
    interface ReservationBaseMeta {
        notes: string;
    }
    interface CarReservationMeta extends ReservationBaseMeta {
        vehicleID: Types.ObjectId;
        type?: Types.ObjectId;
    }
    enum TimeFieldType {
        Start = "start",
        CreatedAt = "createdAt"
    }
}
export default Event;
