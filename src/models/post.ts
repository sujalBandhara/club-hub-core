// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'
import IShared from './shared'

// Sub Models.
import RichContent from './subModels/shared/richContent'

namespace Post {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		clubID?: Types.ObjectId
		title?: string
		description?: string
		author?: Types.ObjectId | User.Model
		imageURL?: string
		attachments?: Attachment[]
		publicationDate?: Date
		subtitle?: string
		type?: Types.ObjectId
		richContent?: RichContent.Model
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------
	
	export interface Attachment {
		remoteUrl: string
		attachmentType: AttachmentType
	}
	
	export enum AttachmentType {
		PDF = 'PDF',
		JPG = 'JPG',
		PNG = 'PNG'
	}
}

export default Post