import { Types } from 'mongoose';
import User from './user';
import Club from './club';
import RichContent from './subModels/shared/richContent';
declare namespace Message {
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
        link?: string;
        type?: Types.ObjectId;
        templateID?: string;
        richContent?: RichContent.Model;
        recipients?: Types.ObjectId[] | User.Model[];
        userGroupIDs?: Types.ObjectId[];
        individualUserIDs?: Types.ObjectId[];
        messageType?: MessageType;
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
    type MessageType = Rsvp | UnRsvp | Welcome;
    enum MessageTemplateID {
        Rsvp = "Rsvp",
        UnRsvp = "UnRsvp",
        Welcome = "Welcome"
    }
    interface BaseMessageType {
        templateID: MessageTemplateID;
    }
    interface Rsvp extends BaseMessageType {
        templateID: MessageTemplateID.Rsvp | MessageTemplateID.UnRsvp;
        eventID: Types.ObjectId;
        userID: Types.ObjectId;
        reservationID: Types.ObjectId;
    }
    interface UnRsvp extends Rsvp {
    }
    interface Welcome extends BaseMessageType {
        templateID: MessageTemplateID.Welcome;
    }
}
export default Message;
