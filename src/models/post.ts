// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'

// Sub Models.
import RichContent from './subModels/shared/richContent'
import Image from './subModels/shared/image'

namespace Post {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
  		_id?: Types.ObjectId
		clubID?: Types.ObjectId
		title?: string
		author?: Types.ObjectId | User.Model
		image?: Image.Model
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
