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
        primaryName?: string;
        secondaryName?: string;
        type: Type;
        tzid: string;
        lat: string;
        lon: string;
        locations?: Location.Model[];
        calendarCredentials?: Calendar.CalendarSyncData;
        userGroups?: User.UserGroup[];
        calendarGroups?: Calendar.Group[];
        navigationConfig?: Navigation;
        image?: Image.Model;
        icon?: Image.Model;
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
        _id?: Types.ObjectId;
        displaysMemberNumber?: boolean;
        primaryColor?: string;
        secondaryColor?: string;
        font?: string;
        iosAppURL?: string;
        androidAppURL?: string;
        customDomain?: string;
        eventSettings?: EventSettings;
    }
    interface EventSettings {
        canInviteMembers?: boolean;
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
        quickLinks: QuickLink[];
        coverImage: Image.Model;
        publicCoverImages?: Image.Model[];
        placeholderImage?: Image.Model;
    }
    interface QuickLink {
        _id?: Types.ObjectId;
        orderingIndex: number;
        title: string;
        link: string;
    }
}
export default Club;
