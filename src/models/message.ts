// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'
import Club from './club'
import Action from './action'

// Sub Models.
import RichContent from './subModels/shared/richContent'

namespace Message {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		_id?: Types.ObjectId
		author?: Types.ObjectId | User.Model
		recipients?: Types.ObjectId[] | User.Model[]
		clubID?: Types.ObjectId | Club.Model
		
		title?: string
		deliveryDate?: Date
		deliveryType?: DeliveryType
		link?: string

		userGroupIDs?: Types.ObjectId[]
		individualUserIDs?: Types.ObjectId[]
		
		richContent?: RichContent.Model
		templateID?: string
		subjectType?: SubjectType
		subjectID?: Types.ObjectId

		action?: Action.Model
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
}

export default Message
