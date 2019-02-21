// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'

// Sub Models.
import Location from './subModels/shared/location'
import RichContent from './subModels/shared/richContent'

// Shared Interfaces.
import IShared from './shared'

namespace Event {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		remoteID?: string
		name?: string
		start?: Date
		end?: Date
		creator?: Types.ObjectId | User.Model,
		rRule?: IShared.GeneralMap<any>
		rDuration?: number
		rDate?: string[]
		categories?: string[]
		description?: string
		location?: Location.Model
		calendarID?: Types.ObjectId
		photoURL?: string
		clubID?: Types.ObjectId
		groupID?: Types.ObjectId
		price?: number
		shortLink?: string
		reservations?: Reservation[]
		public?: boolean
		type?: Types.ObjectId
		richContent?: RichContent.Model
		maxParticipants?: number
		requiresRSVP?: boolean
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------
	
	export interface Reservation {
		_id?: Types.ObjectId
		creator: Types.ObjectId | User.Model
		participants: Participant[]
		meta?: ReservationMeta
	}
	
	export interface Participant {
		_id?: Types.ObjectId
		userID: Types.ObjectId | User.Model | null
		name: string
		rsvp?: boolean
		paid?: boolean
	}
	
	export type ReservationMeta = ReservationBaseMeta | CarReservationMeta // This will be extended to include golf reservation meta etc...
	
	export interface ReservationBaseMeta {
		notes: string
	}
	
	export interface CarReservationMeta extends ReservationBaseMeta {
		vehicleID: Types.ObjectId
	}
}

export default Event
