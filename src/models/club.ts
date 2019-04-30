// External Dependencies
import { Types } from 'mongoose'

// Models
import User from  './user'
import Calendar from './calendar'

// Sub Documents.
import Location from './subModels/shared/location'

namespace Club {
	
	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		name: string
		shortName: string
		type: Type
		tzid: string
		lat: string
		lon: string
		locations?: Location.Model[]
		calendarCredentials?: Calendar.CalendarSyncData
		userGroups?: User.UserGroup[]
		calendarGroups?: Calendar.Group[]
		clubInfo?: ClubInfo
		navigationConfig?: Navigation
		photoURL?: string
		domain?: string
		resources?: Resources
		clubSettings?: ClubSettings
		website?: Website
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
		Golf = 'GOLF',
		Tennis = 'Tennis',
		Social = 'Social',
		Yacht = 'Yacht',
	}

	// --------------------------------
	// General Club Info Interfaces
	// --------------------------------

	export interface ClubInfo {
		data: ClubInfoSection[]
	}
	export interface ClubInfoSection {
		title: string
		sections: ClubInfoEntity[]
	}
	
	export interface ClubInfoEntity {
		title: string
		values: ClubInfoData[]
	}
	
	export interface ClubInfoData {
		type: ClubInfoDataType
		title: string
		action?: ClubInfoDataAction
		value: string | TableValue[]
	}
	
	export interface TableValue {
		title: string
		value: string
	}
	
	export enum ClubInfoDataType {
		single = 'single',
		table = 'table'
	}
	
	export enum ClubInfoDataAction {
		call = 'call',
		email = 'email'
	}

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
		},
		services?: {
			types?: ResourceType[]
		}
	}
	
	export interface ClubSettings {
		displaysMemberNumber?: boolean
		primaryColor?: string
		secondaryColor?: string
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

	// --------------------------------
	// Website
	// --------------------------------

	export interface Website  {
		_id?: Types.ObjectId
		status: string
		coverImageURL: string
		quickLinks: QuickLink[]
		placeholderImageURL?: string
	}

	export interface QuickLink  {
		title: string
		link: string
	}
}

export default Club
