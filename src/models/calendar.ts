// External Dependencies.
import { Types } from 'mongoose'
import * as JsonRules from 'json-rules-engine'

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
        isDefault: boolean
        dateRangeStart: Date
        dateRangeEnd: Date
        rules: ReservationSettingRules[]
    }

    export interface ReservationSettingRules extends JsonRules.RuleFields {
        event: {
            type: string,
            params: {
                successMessage: string,
                failureMessage: string,
            }
        }
    }

}

export default Calendar
