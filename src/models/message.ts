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
	Rsvp | 
	UnRsvp | 
	// Onboarding.
	Welcome | 
	// Forms.
	Application |
	MembershipInquiry |
	MembershipInquiryRes | 
	PublicRsvp |
	// Services
	ServiceRequest |
	NewProviderRequest
	
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

	export interface BaseMessageType {
		type: Type
	}
	
	// ------------------------------
	// Events
	// ------------------------------

	export interface Rsvp extends BaseMessageType {
		type: Type.Rsvp | Type.UnRsvp
		eventID: Types.ObjectId
		userID: Types.ObjectId
		reservationID: Types.ObjectId
	}

	export interface UnRsvp extends Rsvp {}

	// ------------------------------
	// Services
	// ------------------------------
	
	export interface ServiceRequest extends BaseMessageType {
		type: Type.ServiceRequest
		calendarID: Types.ObjectId
		eventID: Types.ObjectId
		userID: Types.ObjectId
		reservationID: Types.ObjectId
	}

	export interface NewProviderRequest extends BaseMessageType {
		type: Type.NewProviderRequest
		calendarID: Types.ObjectId
	}

	// ------------------------------
	// Onboarding
	// ------------------------------

	export interface Welcome extends BaseMessageType {
		type: Type.Welcome
		userID: Types.ObjectId
		password: string
	}

	// ------------------------------
	// Form Submission
	// ------------------------------

	export interface Form extends BaseMessageType {
		form: any
	}

	export interface Application extends Form {
		type: Type.Application
	}

	export interface MembershipInquiry extends Form {
		type: Type.MembershipInquiry
	}

	export interface MembershipInquiryRes extends Form {
		type: Type.MembershipInquiryRes
	}
	
	export interface PublicRsvp extends Form {
		type: Type.PublicRsvp
	}
}

export default Message
