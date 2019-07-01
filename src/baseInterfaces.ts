import { Types } from 'mongoose'

/**
 * Base interface for all model objects
 */
export interface MongoObject {
	_id?: Types.ObjectId
}
