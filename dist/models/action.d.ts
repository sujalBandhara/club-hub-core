import { Types } from 'mongoose';
declare namespace Action {
	interface Model {
		type: Type;
		clubID: Types.ObjectId;
		userID?: Types.ObjectId;
		calendarID?: Types.ObjectId;
		eventID?: Types.ObjectId;
		reservationID?: Types.ObjectId;
		form?: any;
		password?: string;
	}
	enum Type {
		Rsvp = "Event RSVP",
		UnRsvp = "Cancel RSVP",
		ServiceRequest = "Service Request",
		Welcome = "New User",
		Application = "Membership Application",
		MembershipInquiry = "Membership Inquiry",
		MembershipInquiryRes = "Membership Inquiry Response",
		PublicRsvp = "Public Event RSVP",
		NewProviderRequest = "Service Provider Request"
	}
}
export default Action;
