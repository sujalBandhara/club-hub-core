// External Dependencies.
import { Types } from 'mongoose'

namespace Action {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
        // The type of action.
        type: Type

        // The club to which the user belongs.
        clubID: Types.ObjectId

		// The User that generated the action.
		adminID?: Types.ObjectId

		// The User that generated the action.
		userID?: Types.ObjectId
		
        // The calendar associated with the action.
        calendarID?: Types.ObjectId

        // The event associated with the action.
        eventID?: Types.ObjectId

        // The reservation associated with the action.
		reservationID?: Types.ObjectId
		
		// The invitation associated with the action.
		invitationID?: Types.ObjectId

        // The form data associated with the action.
        form?: any

        // We need to get rid of this.
		password?: string
		
		// Email for an invalid email action
		email?: string;
    }

    	/** 
	 * Defines the message's content type.
	 */
	export enum Type {
		// Reservations
		Reservation = "Reservation",
		CancelReservation = "Cancel Reservation",

		// OnBoarding
		Welcome = "New User",

		// Forms
		Application = "Membership Application",
		MembershipInquiry = "Membership Inquiry",
		MembershipInquiryRes = "Membership Inquiry Response",
		PublicRsvp = "Public Event RSVP",
		NewProviderRequest = "Service Provider Request",
		InvalidCredentialsAdminNotification = "Invalid Credentials Admin Notification",
	}
}

export default Action