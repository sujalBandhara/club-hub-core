// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import Location from './subModels/shared/location'
import IShared from './shared'

// Required local Namespace.
import Event from './event'
import Image from './subModels/shared/image'

namespace Calendar {

	export interface BookableResponse {
		calendarID: string
		allTimes: string[]
		eventInfo: Event.AvailableEvent[]
	}

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		name?: string
		remoteID?: string
		clubID?: Types.ObjectId,
		groupID?: Types.ObjectId,
		userGroupID?: Types.ObjectId,
		maxParticipants?: number | null
		location?: Location.Model
		reservationSettings?: ReservationSetting[]
		live?: boolean
		color?: string
		multipleEventsAtStartTime?: boolean
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum GroupType {
		Recreation = 'RECREATION',
		Club = 'CLUB',
		Social = 'SOCIAL',
		Dining = 'DINING',
		Service = 'SERVICE',
		Location = "LOCATION",
		Golf = 'GOLF',
		Tennis = 'TENNIS',
		Simulator = 'SIMULATOR',
		GuestGolfer = 'GUEST_GOLFER',
		Attraction = "ATTRACTION",
		DrivingView = "DRIVING_VIEW"
	}

	export interface Group {
		_id?: Types.ObjectId
		name: string
		rRule?: string
		type?: GroupType
		reservationSettings?: ReservationSetting[],
		image: Image.Model,
		calendarAlias?: string
	}

	export interface CalendarSyncData {
		google?: {
			accessToken: string
			refreshToken: string
		}
		iCal?: string
	}

	export enum GroupName {
		Club = 'Club',
		Golf = 'Golf',
		TeeTimes = 'Tee Time',
		Tennis = 'Tennis',
		GuestGolfer = 'Guest Golfer',
		Generic = 'Generic',
		Simulator = 'Simulator',
		Dining = 'Dining',
		Service = 'Service',
	}

	export interface ReservationSetting {
		_id?: Types.ObjectId
		name: string
		isDefault: boolean
		dateRangeStart: Date
		dateRangeEnd: Date
		bookingDuration: number
		maxGuestsAdmin: number
		maxGuestsMember: number
		publicBookings: boolean
		joinableBookings: boolean
		hours: IShared.HoursOfOperation[]
		privileges: Privilege[]
		lotteryEnabled: boolean
		lotteryStart: number
		lotteryEnd: number
	}

	export interface Privilege {
		memberType: Types.ObjectId,
		bookingWindow: number,
		maxBookings: IShared.LimitForPeriod[]
		maxGuests: IShared.LimitForPeriod[]
	}
}

export default Calendar
