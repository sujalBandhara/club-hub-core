// External Dependencies.
import { Types } from 'mongoose'
import * as RRule from 'rrule'

// Models.
import User from './user'
import Lottery from './lottery'

// Sub Models.
import Location from './subModels/shared/location'
import RichContent from './subModels/shared/richContent'

// Shared Interfaces.
import IShared from './shared'
import Image from './subModels/shared/image'

namespace Event {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		isDraft?: boolean
		remoteID?: string
		name?: string
		start?: Date
		end?: Date
		creator?: Types.ObjectId | User.Model,
		rRule?: IShared.GeneralMap<any>
		exDates?: Date[]
		rDuration?: number
		rDate?: string[]
		categories?: string[]
		location?: Location.Model
		groupID?: Types.ObjectId
		calendarID?: Types.ObjectId
		calendarIDs?: Types.ObjectId[]
		calendarEventID?: string
		images?: Image.Model[]
		image?: Image.Model
		clubID?: Types.ObjectId
		price?: string
		shortLink?: string
		reservations?: Reservation[]
		public?: boolean
		type?: Types.ObjectId
		richContent?: RichContent.Model
		maxGuests?: number // The Max Number of Guests a member can bring to an event. 
		maxParticipants?: number // The max number of people that can attend an event.
		recurring?: number
		recurringEnd?: Date
		requiresRSVP?: boolean
		displayInFeed?: boolean
		blockCalendar?: boolean
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum RecurringFrequency {
		YEARLY = 0,
		MONTHLY = 1,
		WEEKLY = 2,
		DAILY = 3,
		HOURLY = 4,
		MINUTELY = 5,
		SECONDLY = 6
	}

	export interface Reservation {
		_id?: Types.ObjectId
		creator: Types.ObjectId | User.Model // The creator of the reservation (admin or member).
		owner: Types.ObjectId | User.Model // The owner of the reservation (first participant in participant array).
		participants: Participant[]
		notes?: string
		comp?: boolean // Is the reservation comp'ed or not.
		meta?: ReservationMeta
		lottery?: Types.ObjectId | Lottery.Model
	}

	export interface Participant {
		_id?: Types.ObjectId
		userID: Types.ObjectId | User.Model | null
		name: string
		checkedIn?: boolean
		paid?: boolean
		golfCart?: boolean // Golf reservations only.
		holeCount?: number // Golf reservations only.
	}

	export type ReservationMeta = ReservationBaseMeta | CarReservationMeta | GolfReservationMeta | GuestReservationMeta

	export interface ReservationBaseMeta {
		notes: string
	}

	export interface CarReservationMeta extends ReservationBaseMeta {
		vehicleID: Types.ObjectId,
		type?: Types.ObjectId
	}

	export interface GolfReservationMeta extends ReservationBaseMeta {
		golfCartCount?: number
		holeCount?: number
	}

	export interface GuestReservationMeta extends ReservationBaseMeta {
		golfCartCount?: number
		rentalClubCount?: number
		holeCount?: number
		guestPaying?: boolean
	}

	/**
	 * This is used for the `timeField` query param in
	 * `getEvents`. 'start' means we will fetch all events
	 * that start at or after the time string provided.
	 * 'createdAt' means we will fetch all events created on
	 * or after the time string provided. Fetch will default to 'createdAt' 
	 * if no time field is passed in with a start / end query.
	 */
	export enum TimeFieldType {
		Start = 'start',
		CreatedAt = 'createdAt'
	}

	// --------------------------------
	// Available Event Status
	// --------------------------------

	export interface AvailableEvent {
		time: Date
		openSpots: number | null
		totalSpots: number | null
		existingEvent?: Model
		status: AvailableEventStatus
	}

	export enum AvailableEventStatus {
		Open = 'open', // All Slots are Open.
		PublicBooked = 'public-booked', // All spots are booked and public.
		PrivateBooked = 'private-booked', // All spots are booked and private.
		PublicJoinable = 'public-joinable', // Public booking & joinable..
		PrivateJoinable = 'private-joinable', // Private booking & joinable.
		PublicNotJoinable = 'public-not-joinable', // Public booking but not joinable.
		PrivateNotJoinable = 'private-not-joinable', // Private booking & not joinable.
		Blocked = 'blocked', // Block this Event from bookings
		Lottery = 'lottery' // Event is a lottery event.
	}

	export interface EventDataForCalendar {
		calendarID: Types.ObjectId,
		allTimes: Date[],
		eventInfo: AvailableEvent[],
		public: boolean
		joinable: boolean
		date?: Date
		lotteryDay: boolean
	}

	export enum UpdateType {
		All = 'all',
		Single = 'single',
		Future = 'future'
	}
}

export default Event
