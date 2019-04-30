// ------------------------------------
// Storage for general interfaces
// ------------------------------------

namespace IShared {

    export interface Timestamps {
        createdAt?: Date
        updatedAt?: Date
    }

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
		sortField?: string
		sortValue?: string | number
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
		Scheduled = 'SCHEDULED',
		Delivered = 'DELIVERED',
		Template = 'TEMPLATE',
    }

    /**
     * An enum to describe Days of Week
     */
    export enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
	}

    /**
     * An enum to describe a period of Time
     */
    export enum TimePeriod {
        Day = 0,
        Week = 1,
        Month = 2,
        Year = 3
    }

    /**
     * An enum to describe a restriction for a period of Time
     */
    export interface LimitForPeriod {
        period: TimePeriod,
        limit: number
	}
	
	/**
	 * Defines the hours of operation for a resource.
	 */
	export interface HoursOfOperation {
        dayOfWeek: DayOfWeek,
        opens: Date,
        closes: Date,
    }
}

export default IShared