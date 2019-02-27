// External Dependencies
import { Types } from 'mongoose'

// Models
import User from  './user'
import Calendar from './calendar'

// Sub Documents.
import Location from './subModels/shared/location'

// Shared Interfaces.
import IShared from './shared'

namespace Club {
	
	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		name: string
		type: Type
		locations?: Location.Model[]
		calendarCredentials?: Calendar.CalendarSyncData
		userGroups?: User.UserGroup[]
		calendarGroups?: Calendar.CalendarGroup[]
		clubInfo?: IShared.GeneralMap<any>
		navigationConfig?: Navigation
		photoURL?: string
		domain?: string
		resources?: Resources
	}

	/**
	 * This is returned from the unprotected club endpoint
	 * that is used to populate the club selection screen
	 * on the Login Component.
	 */
	export interface UnprotectedModel {
		_id: string
		name: string
		city: string
		state: string
		zip: string
		photoURL: string
		domain: string
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum Type {
		Car = 'CAR',
		Golf = 'GOLF'
	}

	export const defaultMembershipTypes = ['EQUITY', 'SPOUSE', 'PARENT']
	
	export const defaultEventTypes = ['Member', 'Outside', 'Club']

	// --------------------------------
	// Resource interfaces specific to clubs.
	// --------------------------------

	export interface Resources {
		events?: {
			types?: ResourceType[]
		},
		posts?: {
			types?: ResourceType[]
		},
		members?: {
			types?: ResourceType[]
		},
		messages?: {
			types?: ResourceType[]
		}
	}
	
	export interface ResourceType {
		_id?: Types.ObjectId
		title?: string
		color?: string
	}

	// --------------------------------
	// Navigation
	// --------------------------------
	
	export interface Navigation {
		admin: NavigationSection[],
		customer: NavigationSection[],
		mobile: NavigationSection[],
	}
	
	export interface NavigationSection {
		title: string,
		items: NavigationItem[]
	}
	
	export interface NavigationItem {
		title: string,
		fontAwesomeIcon?: string,
		featherIcon?: string,
		path: string,
	}
}

export default Club
