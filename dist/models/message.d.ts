import { Types } from 'mongoose';
import User from './user';
import Club from './club';
import RichContent from './subModels/shared/richContent';
export declare namespace Message {
    interface Model {
        _id?: Types.ObjectId;
        text?: string;
        author?: Types.ObjectId | User.Model;
        clubID?: Types.ObjectId | Club.Model;
        subjectType?: SubjectType;
        subjectID?: Types.ObjectId;
        title?: string;
        deliveryDate?: Date;
        deliveryType?: DeliveryType;
        recipients?: Types.ObjectId[] | User.Model[];
        link?: string;
        type?: Types.ObjectId;
        richContent?: RichContent.Model;
    }
    enum SubjectType {
        Post = "POST",
        Event = "EVENT"
    }
    enum DeliveryType {
        Push = "PUSH",
        Email = "EMAIL",
        Text = "TEXT"
    }
}
export default Message;
