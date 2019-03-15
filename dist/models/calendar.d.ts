import { Types } from 'mongoose';
import Location from './subModels/shared/location';
import IShared from './shared';
import Event from './event';
declare namespace Calendar {
    interface BookableResponse {
        calendarID: string;
        allTimes: string[];
        eventInfo: AvailableEvent[];
    }
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        remoteID?: string;
        clubID?: Types.ObjectId;
        groupID?: Types.ObjectId;
        maxParticipants?: number | null;
        location?: Location.Model;
        reservationSettings?: ReservationSetting[];
    }
    enum CalendarGroupType {
        Recreation = "RECREATION",
        Social = "SOCIAL",
        Dining = "DINING",
        ServiceProvider = "SERVICE_PROVIDER"
    }
    interface CalendarGroup {
        _id?: Types.ObjectId;
        name: string;
        rRule?: string;
        type?: CalendarGroupType;
        reservationSettings?: ReservationSetting[];
    }
    interface CalendarSyncData {
        google?: {
            accessToken: string;
            refreshToken: string;
        };
        iCal?: string;
    }
    enum CalendarGroupName {
        Club = "Club",
        Golf = "Golf"
    }
    interface AvailableEvent {
        time: string;
        openSpots: number | null;
        totalSpots: number | null;
        existingEvent?: {
            _id: string;
            start: string;
            end: string;
            reservations?: Event.Reservation[];
        };
    }
    interface ReservationSetting {
        _id?: Types.ObjectId;
        name: string;
        isDefault: boolean;
        dateRangeStart: Date;
        dateRangeEnd: Date;
        bookingDuration: number;
        maxGuestsAdmin: number;
        maxGuestsMember: number;
        publicBookings: boolean;
        joinableBookings: boolean;
        hours: HoursOfOperation[];
        privileges: Privilege[];
    }
    interface Privilege {
        memberType: Types.ObjectId;
        bookingWindow: number;
        maxBookings: IShared.LimitForPeriod[];
        maxGuests: IShared.LimitForPeriod[];
    }
    interface HoursOfOperation {
        dayOfWeek: IShared.DayOfWeek;
        opens: Date;
        closes: Date;
    }
}
export default Calendar;
