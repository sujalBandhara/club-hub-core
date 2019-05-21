import { Types } from 'mongoose';
import User from './user';
import Calendar from './calendar';
import Location from './subModels/shared/location';
import Image from './subModels/shared/image';
import Section from './section';
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
    interface PublicClubInfo {
        club: Model;
        sections: Section.Model[];
    }
    enum Type {
        Car = "Car",
        Golf = "Golf",
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
        font?: string;
    }
    interface ResourceType {
        _id?: Types.ObjectId;
        title?: string;
        color?: string;
    }
    interface Navigation {
        admin: NavigationSection[];
        customer: NavigationSection[];
        mobile: MobileNavigationSection[];
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
    interface MobileNavigationSection {
        title: TabNames;
        icon: string;
        props?: MobileNavigationSectionProps;
    }
    interface MobileNavigationSectionProps {
        leftButton?: MobileNavigationButtonName;
        leftIcon?: string;
        rightButton?: MobileNavigationButtonName;
        rightIcon?: string;
    }
    enum MobileNavigationButtonName {
        MessageButton = "MessageButton",
        CalendarButton = "CalendarButton",
        ClubInfoButton = "ClubInfoButton",
        ProfileButton = "ProfileButton",
        EditProfileButton = "EditProfileButton"
    }
    enum TabNames {
        News = "News",
        Events = "Events",
        Members = "Members",
        Profile = "Profile",
        Menu = "Menu",
        Calendar = "Calendar",
        Club = "Club",
        Services = "Services",
        Reservation = "Reservation"
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
