import { Types } from 'mongoose';
declare namespace Action {
    interface Model {
        type: Type;
        clubID: Types.ObjectId;
        adminID?: Types.ObjectId;
        userID?: Types.ObjectId;
        calendarID?: Types.ObjectId;
        eventID?: Types.ObjectId;
        reservationID?: Types.ObjectId;
        invitationID?: Types.ObjectId;
        form?: any;
        password?: string;
        email?: string;
    }
    enum Type {
        Reservation = "Reservation",
        CancelReservation = "Cancel Reservation",
        Welcome = "New User",
        Application = "Membership Application",
        MembershipInquiry = "Membership Inquiry",
        MembershipInquiryRes = "Membership Inquiry Response",
        PublicRsvp = "Public Event RSVP",
        NewProviderRequest = "Service Provider Request",
        InvalidCredentialsAdminNotification = "Invalid Credentials Admin Notification"
    }
}
export default Action;
