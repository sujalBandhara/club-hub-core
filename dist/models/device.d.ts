import { Types } from 'mongoose';
declare namespace Device {
    interface Model {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        token?: string;
        os?: string;
        version?: string;
        timezone?: string;
        oneSignalID?: string;
    }
}
export default Device;
