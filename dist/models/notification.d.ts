import { Types } from 'mongoose';
import User from './user';
import Message from './message';
import IShared from './shared';
declare namespace Notification {
    interface Model {
        _id?: Types.ObjectId;
        recipient: Types.ObjectId | User.Model;
        message: Types.ObjectId | Message.Model;
        method: Message.DeliveryType;
        remoteID: string;
        metadata: IShared.GeneralMap<any>;
    }
}
export default Notification;
