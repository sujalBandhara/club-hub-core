import { Types } from 'mongoose';
import User from './user';
import Club from './club';
import Action from './action';
import RichContent from './subModels/shared/richContent';
declare namespace Message {
    interface Model {
        _id?: Types.ObjectId;
        author?: Types.ObjectId | User.Model;
        recipients?: Types.ObjectId[] | User.Model[];
        clubID?: Types.ObjectId | Club.Model;
        title?: string;
        deliveryDate?: Date;
        deliveryType?: DeliveryType;
        link?: string;
        userGroupIDs?: Types.ObjectId[];
        individualUserIDs?: Types.ObjectId[];
        eventIDs?: Types.ObjectId[];
        richContent?: RichContent.Model;
        templateID?: string;
        subjectType?: SubjectType;
        subjectID?: Types.ObjectId;
        action?: Action.Model;
    }
    enum SubjectType {
        Post = "POST",
        Event = "EVENT",
        Reservation = "RESERVATION"
    }
    enum DeliveryType {
        Push = "PUSH",
        Email = "EMAIL",
        Text = "TEXT"
    }
}
export default Message;
