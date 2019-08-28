import User from './user';
import Club from './club';
import Restaurant from './restaurant';
import { Types } from 'mongoose';
declare namespace Session {
    interface Model {
        _id?: Types.ObjectId;
        user: User.Model | Types.ObjectId;
        lastTouch: Date;
        platform: string;
        createdAt?: Date;
        updatedAt?: Date;
    }
    enum PlatformTypes {
        Chrome = "Chrome",
        Edge = "Edge",
        IE = "IE",
        Safari = "Safari",
        Firefox = "Firefox",
        Opera = "Opera",
        NativeIos = "iOS",
        AndroidAndroid = "Android",
        OtherWeb = "OtherWeb",
        OtherMobile = "OtherMobile",
        Other = "Other"
    }
    enum DeviceTypes {
        Desktop = "Desktop",
        iPhone = "iPhone",
        Android = "Android",
        iOSTablet = "iOSTablet",
        androidTablet = "androidTablet",
        otherPhone = "otherPhone",
        otherTablet = "otherTablet"
    }
    interface Login {
        club: Club.Model;
        token: string;
        user: User.Model;
    }
    interface State {
        restaurants: Restaurant.Model[];
        users: User.Model[];
        club: Club.Model;
        members: User.Model[];
    }
}
export default Session;
