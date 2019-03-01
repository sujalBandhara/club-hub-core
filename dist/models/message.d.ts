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
    type Content = Rsvp | UnRsvp | Welcome | Application | MembershipInquiry | MembershipInquiryRes | PublicRsvp | ServiceRequest | NewProviderRequest;
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
    interface BaseMessageType {
        type: Type;
    }
    interface Rsvp extends BaseMessageType {
        type: Type.Rsvp | Type.UnRsvp;
        eventID: Types.ObjectId;
        userID: Types.ObjectId;
        reservationID: Types.ObjectId;
    }
    interface UnRsvp extends Rsvp {
    }
    interface ServiceRequest extends BaseMessageType {
        type: Type.ServiceRequest;
        calendarID: Types.ObjectId;
        eventID: Types.ObjectId;
        userID: Types.ObjectId;
        reservationID: Types.ObjectId;
    }
    interface NewProviderRequest extends BaseMessageType {
        type: Type.NewProviderRequest;
        calendarID: Types.ObjectId;
    }
    interface Welcome extends BaseMessageType {
        type: Type.Welcome;
        userID: Types.ObjectId;
        password: string;
    }
    interface Form extends BaseMessageType {
        form: any;
    }
    interface Application extends Form {
        type: Type.Application;
    }
    interface MembershipInquiry extends Form {
        type: Type.MembershipInquiry;
    }
    interface MembershipInquiryRes extends Form {
        type: Type.MembershipInquiryRes;
    }
    interface PublicRsvp extends Form {
        type: Type.PublicRsvp;
    }
}
export default Message;
