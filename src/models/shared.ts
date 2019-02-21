// External Dependencies.
import { Types } from 'mongoose'

// ------------------------------------
// Storage for general interfaces
// ------------------------------------

export namespace IShared {

	/**
	 * Used to define an object that would otherwise be set to 'any'.
	 */
	export interface GeneralMap<T> {
		[key: string]: T
	}
	
	// ------------------------------------
	// Request / Response Interfaces
	// ------------------------------------
	
	/**
	 * Query parameters interface for routes.
	 * NOTES:
	 * - Set limit to 0 to ignore limit.
	 * - Start/end time thresholds will be applied to the 'timeField' key.
	 * If this value isn't supplied as a query param, start/end time will be applied to the document's 'createdAt' field.
	 */
	export interface QueryOptions {
		limit?: number | string
		offset?: number | string
		start?: number | Date | string
		end?: number | Date | string
		timeField?: string
		[key: string]: any
	}
	
	// ------------------------------------
	// Mongoose Interfaces
	// ------------------------------------
	
	/**
	 * Error created by Mongo Validation will respond with the following.
	 */
	export interface MongooseError {
		code?: number
		name?: string
		errmsg?: string
		errors?: GeneralMap<ErrorObj>
		_message?: string
	}
	
	export interface ErrorObj {
		message: string
		field: string
	}

	/** 
	 * Describes the status on models: Post, Message and Event.
	 */
	export enum PublicationStatus {
		Draft = 'DRAFT',
		Pending = 'PENDING',
		Published = 'PUBLISHED',
	}
}

export default IShared