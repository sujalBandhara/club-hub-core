// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'
import Club from './club'
import IShared from './shared'

// Sub Models.
import RichContent from './subModels/shared/richContent'

export namespace Message {

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
		recipients?: Types.ObjectId[] | User.Model[]
		link?: string
		type?: Types.ObjectId
		richContent?: RichContent.Model
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------
	
	export enum SubjectType {
		Post = 'POST',
		Event = 'EVENT'
	}
	
	export enum DeliveryType {
		Push = 'PUSH',
		Email = 'EMAIL',
		Text = 'TEXT'
	}
}

export default Message
