// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'
import Club from './club'

// Sub Models.
import RichContent from './subModels/shared/richContent'

namespace Message {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		_id?: Types.ObjectId
		text?: string
		author?: Types.ObjectId | User.Model
		clubID?: Types.ObjectId | Club.Model
		subjectType?: SubjectType
		subjectID?: Types.ObjectId
		title?: string
		deliveryDate?: Date
		deliveryType?: DeliveryType
		link?: string
		type?: Types.ObjectId
		templateID?: string
		richContent?: RichContent.Model
		recipients?: Types.ObjectId[] | User.Model[]
		userGroupIDs?: Types.ObjectId[]
		individualUserIDs?: Types.ObjectId[]
		content?: Content // A spec for the message content.
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------
	
	export enum SubjectType {
		Post = 'POST',
		Event = 'EVENT',
		Reservation = 'RESERVATION'
	}
	
	export enum DeliveryType {
		Push = 'PUSH',
		Email = 'EMAIL',
		Text = 'TEXT'
	}

	// --------------------------------
	// Message Type Interfaces
	// --------------------------------

	export type Content = 
	// Events.
	EventMessage |

	// Onboarding.
	Welcome | 

	// Forms.
	FormMessage
	
	/** 
	 * Defines the message's content type.
	 */
	export enum Type {
		// Events.
		Rsvp = 'Rsvp',
		UnRsvp = 'UnRsvp',

		// Onboarding.
		Welcome = 'Welcome',

		// Forms.
		Application = 'Application',
		MembershipInquiry = 'MembershipInquiry',
		MembershipInquiryRes= 'MembershipInquiryRes',
		PublicRsvp = 'PublicRsvp',
		
		// Services.
		ServiceRequest = 'ServiceRequest',
		NewProviderRequest = 'NewProviderRequest'
	}

	/** 
	 * Event message's content field.
	 */
	export interface EventMessage {
		type: Type.Rsvp | Type.UnRsvp | Type.ServiceRequest
		eventID: Types.ObjectId
		userID?: Types.ObjectId
		reservationID: Types.ObjectId
		calendarID: Types.ObjectId
	}

	/** 
	 * Form message's content field.
	 */
	export interface FormMessage {
		type: Type.Application | Type.MembershipInquiry | Type.PublicRsvp | Type.NewProviderRequest,
		form: any,
		eventID?: Types.ObjectId
	}

	// ------------------------------
	// Onboarding
	// ------------------------------

	export interface Welcome {
		type: Type.Welcome
		userID: Types.ObjectId
		password: string
	}
}

export default Message
