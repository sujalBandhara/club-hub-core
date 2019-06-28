import { Types } from 'mongoose';
declare namespace NotificationPreference {
    interface Model {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        enableAll?: boolean;
        enablePush?: boolean;
        enableEmail?: boolean;
        enableText?: boolean;
    }
    interface Group extends Model {
        groupID: Types.ObjectId;
    }
}
export default NotificationPreference;
