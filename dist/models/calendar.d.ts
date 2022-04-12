import { Types } from 'mongoose';
import Location from './subModels/shared/location';
import IShared from './shared';
import Event from './event';
import Image from './subModels/shared/image';
declare namespace Calendar {
    interface BookableResponse {
        calendarID: string;
        allTimes: string[];
        eventInfo: Event.AvailableEvent[];
    }
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        remoteID?: string;
        clubID?: Types.ObjectId;
        groupID?: Types.ObjectId;
        userGroupID?: Types.ObjectId;
        maxParticipants?: number | null;
        location?: Location.Model;
        endLocation?: Location.Model;
        reservationSettings?: ReservationSetting[];
        live?: boolean;
        color?: string;
        multipleEventsAtStartTime?: boolean;
    }
    enum GroupType {
        Recreation = "RECREATION",
        Club = "CLUB",
        Social = "SOCIAL",
        Dining = "DINING",
        Service = "SERVICE",
        Location = "LOCATION",
        Golf = "GOLF",
        Tennis = "TENNIS",
        Simulator = "SIMULATOR",
        GuestGolfer = "GUEST_GOLFER",
        Attraction = "ATTRACTION",
		DrivingView = "DRIVING_VIEW"
    }
    interface Group {
        _id?: Types.ObjectId;
        name: string;
        rRule?: string;
        type?: GroupType;
        reservationSettings?: ReservationSetting[];
        image: Image.Model;
        calendarAlias?: string;
    }
    interface CalendarSyncData {
        google?: {
            accessToken: string;
            refreshToken: string;
        };
        iCal?: string;
    }
    enum GroupName {
        Club = "Club",
        Golf = "Golf",
        TeeTimes = "Tee Time",
        Tennis = "Tennis",
        GuestGolfer = "Guest Golfer",
        Generic = "Generic",
        Simulator = "Simulator",
        Dining = "Dining",
        Service = "Service"
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
        hours: IShared.HoursOfOperation[];
        privileges: Privilege[];
        lotteryEnabled: boolean;
        lotteryStart: number;
        lotteryEnd: number;
    }
    interface Privilege {
        memberType: Types.ObjectId;
        bookingWindow: number;
        maxBookings: IShared.LimitForPeriod[];
        maxGuests: IShared.LimitForPeriod[];
    }
}
export default Calendar;
