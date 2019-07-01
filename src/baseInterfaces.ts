import { Types } from 'mongoose'

export type CoreModelID = Types.ObjectId

/**
 * Base interface for all model objects
 */
export interface MongoObject {
	_id?: Types.ObjectId
}
