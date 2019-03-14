// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import Location from './subModels/shared/location'

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

	export enum CalendarGroupType {
		Recreation = 'RECREATION',
		Social = 'SOCIAL',
		Dining = 'DINING',
		ServiceProvider = 'SERVICE_PROVIDER'
	}

	export interface CalendarGroup {
		_id?: Types.ObjectId
		name: string
		rRule?: string
		type?: CalendarGroupType
	}
	
	export interface CalendarSyncData {
		google?: {
			accessToken: string
			refreshToken: string
		}
		iCal?: string
	}

	export enum CalendarGroupName {
		Club = 'Club',
		Golf = 'Golf'
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
        hours: string[]
        privilege: any[]
    }
}

export default Calendar
