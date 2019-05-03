import { Types } from 'mongoose';
import Note from './note';
import CarMeta from './subModels/car';
import GolfMeta from './subModels/golf';
import Location from './subModels/shared/location';
import Image from './subModels/shared/image';
import PhoneNumber from './subModels/shared/phoneNumber';
declare namespace User {
    interface Model {
        _id?: Types.ObjectId;
        title?: string;
        suffix?: string;
        firstName?: string;
        lastName?: string;
        middleName?: string;
        addresses?: Location.Model[];
        admin?: boolean;
        birthday?: Date | null;
        clubID?: Types.ObjectId;
        remoteID?: string;
        email?: string;
        jobTitle?: string;
        notes?: Note.Model[];
        company?: string;
        website?: string;
        joined?: Date;
        password?: string;
        salt?: string;
        phoneNumbers?: PhoneNumber.Model[];
        image?: Image.Model;
        username?: string;
        groups?: string[];
        memberNumber?: MemberNumber;
        membershipType?: Types.ObjectId;
        maritalStatus?: MaritalStatus;
        memberStatus?: MemberStatus;
        meta?: UserMeta;
        displaySettings?: DisplaySettings;
        hostIDs?: Types.ObjectId[];
        primaryAccountHolder?: boolean;
    }
    interface MemberNumber {
        number: string;
        suffix?: string;
    }
    enum DefaultUserGroups {
        AllAdmins = "All Admins",
        AllMembers = "All Members"
    }
    interface UserGroup {
        _id?: Types.ObjectId;
        name: string;
        description?: string;
        users?: Types.ObjectId[] | Model[];
    }
    interface UserMeta {
        _id?: Types.ObjectId;
        hide?: boolean;
        golf?: GolfMeta.Model;
        car?: CarMeta.Model;
    }
    enum MaritalStatus {
        Single = "SINGLE",
        InRelationship = "IN_RELATIONSHIP",
        Married = "MARRIED",
        Divorced = "DIVORCED",
        Widowed = "WIDOWED"
    }
    enum MemberStatus {
        Prospect = "PROSPECT",
        Active = "ACTIVE",
        Lapsed = "LAPSED",
        Guest = "GUEST"
    }
    interface DisplaySettings {
        publicProfile: boolean;
        publicContact: boolean;
    }
}
export default User;
