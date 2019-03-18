import { Types } from 'mongoose';
import CarMeta from './subModels/car';
import GolfMeta from './subModels/golf';
declare namespace User {
    interface Model {
        _id?: Types.ObjectId;
        address?: string;
        admin?: boolean;
        birthday?: Date | null;
        city?: string;
        clubID?: Types.ObjectId;
        remoteID?: string;
        email?: string;
        firstName?: string;
        jobTitle?: string;
        joined?: Date;
        lastName?: string;
        location?: string;
        middleName?: string;
        password?: string;
        salt?: string;
        phone?: string;
        photoURL?: string;
        state?: string;
        username?: string;
        zip?: string;
        groups?: string[];
        memberNumber?: string;
        membershipType?: Types.ObjectId;
        maritalStatus?: MaritalStatus;
        memberStatus?: MemberStatus;
        meta?: UserMeta;
        displaySettings?: DisplaySettings;
        agentAccessCode?: string;
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
        Lapsed = "LAPSED"
    }
    interface DisplaySettings {
        publicProfile: boolean;
        publicContact: boolean;
    }
}
export default User;
