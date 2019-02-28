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
		// Newly added key to define the type of message.
		messageType?: MessageType
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

	type MessageType = Rsvp | UnRsvp
	
	enum MessageTemplateID {
		Rsvp = 'Rsvp',
		UnRsvp = 'UnRsvp'
	}
	
	// ------------------------------
	// Events
	// ------------------------------

	interface Rsvp {
		templateID: MessageTemplateID.Rsvp | MessageTemplateID.UnRsvp
		eventID: Types.ObjectId
		reservationID: Types.ObjectId
	}

	interface UnRsvp extends Rsvp {}
}

export default Message
