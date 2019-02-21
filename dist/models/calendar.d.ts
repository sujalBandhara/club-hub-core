import { Types } from 'mongoose';
import Location from './subModels/shared/location';
declare namespace Calendar {
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        remoteID?: string;
        clubID?: Types.ObjectId;
        groupID?: Types.ObjectId;
        maxParticipants?: number | null;
        location?: Location.Model;
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
}
export default Calendar;
