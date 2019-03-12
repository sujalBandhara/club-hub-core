/// <reference types="json-rules-engine-types" />
import { Types } from 'mongoose';
import * as JsonRules from 'json-rules-engine';
import Location from './subModels/shared/location';
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
        isDefault: boolean;
        rules: ReservationSettingRules[];
    }
    interface ReservationSettingRules extends JsonRules.RuleFields {
        event: {
            type: string;
            params: {
                successMessage: string;
                failureMessage: string;
            };
        };
    }
}
export default Calendar;
