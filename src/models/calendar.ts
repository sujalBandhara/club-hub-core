// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import Location from './subModels/shared/location'

namespace Calendar {

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
}

export default Calendar