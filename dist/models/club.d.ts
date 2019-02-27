import { Types } from 'mongoose';
import User from './user';
import Calendar from './calendar';
import Location from './subModels/shared/location';
import IShared from './shared';
declare namespace Club {
    interface Model {
        _id?: Types.ObjectId;
        name: string;
        type: Type;
        locations?: Location.Model[];
        calendarCredentials?: Calendar.CalendarSyncData;
        userGroups?: User.UserGroup[];
        calendarGroups?: Calendar.CalendarGroup[];
        clubInfo?: IShared.GeneralMap<any>;
        navigationConfig?: Navigation;
        photoURL?: string;
        domain?: string;
        resources?: Resources;
    }
    interface UnprotectedModel {
        _id: string;
        name: string;
        city: string;
        state: string;
        zip: string;
        photoURL: string;
        domain: string;
    }
    enum Type {
        Car = "CAR",
        Golf = "GOLF"
    }
    const defaultMembershipTypes: string[];
    const defaultEventTypes: string[];
    interface Resources {
        events?: {
            types?: ResourceType[];
        };
        posts?: {
            types?: ResourceType[];
        };
        members?: {
            types?: ResourceType[];
        };
        messages?: {
            types?: ResourceType[];
        };
    }
    interface ResourceType {
        _id?: Types.ObjectId;
        title?: string;
        color?: string;
    }
    interface Navigation {
        admin: NavigationSection[];
        customer: NavigationSection[];
        mobile: NavigationSection[];
    }
    interface NavigationSection {
        title: string;
        items: NavigationItem[];
    }
    interface NavigationItem {
        title: string;
        fontAwesomeIcon?: string;
        featherIcon?: string;
        path: string;
    }
}
export default Club;
