// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import Location from './subModels/shared/location'
import IShared from './shared'

// Required local Namespace.
import Event from './event'

namespace Calendar {

	export interface BookableResponse {
		calendarID: string
		allTimes: string[]
		eventInfo: AvailableEvent[]
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
		maxParticipants?: number | null
        location?: Location.Model
		reservationSettings?: ReservationSetting[]
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum GroupType {
		Recreation = 'RECREATION',
		Club = 'CLUB',
		Social = 'SOCIAL',
		Dining = 'DINING',
		ServiceProvider = 'SERVICE_PROVIDER',
		Golf = 'GOLF',
		Tennis = 'TENNIS',
		Simulator = 'SIMULATOR'
	}

	export interface Group {
		_id?: Types.ObjectId
		name: string
		rRule?: string
        type?: GroupType
		reservationSettings?: ReservationSetting[],
		photoURL: string
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
		TeeTimes = 'Tee Times',
		Tennis = 'Tennis',
		Simulator = 'Simulator',
		Dining = 'Dining',
		Service = 'Service',
	}

	export interface AvailableEvent {
		time: string
		openSpots: number | null
		totalSpots: number | null
		existingEvent?: {
				_id: string
				start: string
				end: string
				reservations?: Event.Reservation[]
		}
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
        hours: HoursOfOperation[]
        privileges: Privilege[]
    }

    export interface Privilege {
        memberType: Types.ObjectId,
        bookingWindow: number,
        maxBookings: IShared.LimitForPeriod[]
        maxGuests: IShared.LimitForPeriod[]
    }

    export interface HoursOfOperation {
        dayOfWeek: IShared.DayOfWeek,
        opens: Date,
        closes: Date,
    }
}

export default Calendar
