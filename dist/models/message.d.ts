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
        content?: Content;
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
    type Content = EventMessage | Welcome | FormMessage;
    enum Type {
        Rsvp = "Rsvp",
        UnRsvp = "UnRsvp",
        Welcome = "Welcome",
        Application = "Application",
        MembershipInquiry = "MembershipInquiry",
        MembershipInquiryRes = "MembershipInquiryRes",
        PublicRsvp = "PublicRsvp",
        ServiceRequest = "ServiceRequest",
        NewProviderRequest = "NewProviderRequest"
    }
    interface EventMessage {
        type: Type.Rsvp | Type.UnRsvp | Type.ServiceRequest;
        eventID: Types.ObjectId;
        userID?: Types.ObjectId;
        reservationID: Types.ObjectId;
        calendarID: Types.ObjectId;
    }
    interface FormMessage {
        type: Type.Application | Type.MembershipInquiry | Type.PublicRsvp | Type.NewProviderRequest | Type.MembershipInquiryRes;
        form: any;
        eventID?: Types.ObjectId;
    }
    interface Welcome {
        type: Type.Welcome;
        userID: Types.ObjectId;
        password: string;
    }
}
export default Message;
