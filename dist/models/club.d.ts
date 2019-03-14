import { Types } from 'mongoose';
import User from './user';
import Calendar from './calendar';
import Location from './subModels/shared/location';
declare namespace Club {
    interface Model {
        _id?: Types.ObjectId;
        name: string;
        type: Type;
        locations?: Location.Model[];
        calendarCredentials?: Calendar.CalendarSyncData;
        userGroups?: User.UserGroup[];
        calendarGroups?: Calendar.CalendarGroup[];
        clubInfo?: ClubInfo;
        navigationConfig?: Navigation;
        photoURL?: string;
        domain?: string;
        resources?: Resources;
        clubSettings?: ClubSettings;
    }
    interface UnprotectedModel {
        _id: string;
        name: string;
        city: string;
        state: string;
        zip: string;
        photoURL: string;
    }
    enum Type {
        Car = "CAR",
        Golf = "GOLF"
    }
    const defaultMembershipTypes: string[];
    const defaultEventTypes: string[];
    interface ClubInfo {
        data: ClubInfoSection[];
    }
    interface ClubInfoSection {
        title: string;
        sections: ClubInfoEntity[];
    }
    interface ClubInfoEntity {
        title: string;
        values: ClubInfoData[];
    }
    interface ClubInfoData {
        type: ClubInfoDataType;
        title: string;
        action?: ClubInfoDataAction;
        value: string | TableValue[];
    }
    interface TableValue {
        title: string;
        value: string;
    }
    enum ClubInfoDataType {
        single = "single",
        table = "table"
    }
    enum ClubInfoDataAction {
        call = "call",
        email = "email"
    }
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
    interface ClubSettings {
        displaysMemberNumber: boolean;
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
