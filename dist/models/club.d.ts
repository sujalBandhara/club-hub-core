import { Types } from 'mongoose';
import User from './user';
import Calendar from './calendar';
import Location from './subModels/shared/location';
import Image from './subModels/shared/image';
declare namespace Club {
    interface Model {
        _id?: Types.ObjectId;
        name: string;
        type: Type;
        tzid: string;
        lat: string;
        lon: string;
        locations?: Location.Model[];
        calendarCredentials?: Calendar.CalendarSyncData;
        userGroups?: User.UserGroup[];
        calendarGroups?: Calendar.Group[];
        clubInfo?: ClubInfo;
        navigationConfig?: Navigation;
        image?: Image.Model;
        domain?: string;
        resources?: Resources;
        clubSettings?: ClubSettings;
        website?: Website;
        shortName?: string;
    }
    interface UnprotectedModel {
        _id: string;
        name: string;
        city: string;
        state: string;
        zip: string;
        image?: Image.Model;
        domain: string;
    }
    enum Type {
        Car = "CAR",
        Golf = "GOLF",
        Tennis = "Tennis",
        Social = "Social",
        Yacht = "Yacht"
    }
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
        services?: {
            types?: ResourceType[];
        };
    }
    interface ClubSettings {
        displaysMemberNumber?: boolean;
        primaryColor?: string;
        secondaryColor?: string;
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
    interface Website {
        _id?: Types.ObjectId;
        status: string;
        coverImage: Image.Model;
        quickLinks: QuickLink[];
        placeholderImage?: Image.Model;
    }
    interface QuickLink {
        title: string;
        link: string;
    }
}
export default Club;
