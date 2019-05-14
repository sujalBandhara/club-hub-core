import { Types } from 'mongoose';
import User from './user';
import Message from './message';
import IShared from './shared';
declare namespace Notification {
    interface Model {
        _id?: Types.ObjectId;
        clubID?: Types.ObjectId;
        recipient: Types.ObjectId | User.Model;
        message: Types.ObjectId | Message.Model;
        method: Message.DeliveryType;
        remoteID: string;
        metadata: IShared.GeneralMap<any>;
        status: Status;
    }
    enum Status {
        Delivered = "DELIVERED",
        Read = "READ",
        Error = "ERROR"
    }
}
export default Notification;
