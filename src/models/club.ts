// External Dependencies
import { Types } from 'mongoose'

// Models
import User from './user'
import Calendar from './calendar'

// Sub Documents.
import Location from './subModels/shared/location'
import Image from './subModels/shared/image'
import Section from './section'

namespace Club {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		name: string
		primaryName?: string
		secondaryName?: string
		type: Type
		tzid: string
		lat: string
		lon: string
		locations?: Location.Model[]
		calendarCredentials?: Calendar.CalendarSyncData
		userGroups?: User.UserGroup[]
		calendarGroups?: Calendar.Group[]
		navigationConfig?: Navigation
		image?: Image.Model
		icon?: Image.Model
		domain?: string
		resources?: Resources
		clubSettings?: ClubSettings
		website?: Website
		shortName?: string
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
		image?: Image.Model
		domain: string
	}

	/**
	 * PublicClubInfo contains the content for a public ClubHub website.
	 */
	export interface PublicClubInfo {
		club: Model
		sections: Section.Model[]
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum Type {
		Car = 'Car',
		Golf = 'Golf',
		Tennis = 'Tennis',
		Social = 'Social',
		Yacht = 'Yacht',
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
        _id?: Types.ObjectId
		displaysMemberNumber?: boolean
		primaryColor?: string
		secondaryColor?: string
		font?: string
		iosAppURL?: string
		androidAppURL?: string
		customDomain?: string
		eventSettings: EventSettings
	}

	export interface EventSettings {
		canInviteGuests?: boolean
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
		mobile: MobileNavigationSection[],
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
	// Mobile
	// --------------------------------

	export interface MobileNavigationSection {
		title: TabNames
		icon: string
		props?: MobileNavigationSectionProps
	}

	export interface MobileNavigationSectionProps {
		leftButton?: MobileNavigationButtonName
		leftIcon?: string
		rightButton?: MobileNavigationButtonName
		rightIcon?: string
	}

	export enum MobileNavigationButtonName {
		MessageButton = 'MessageButton',
		CalendarButton = 'CalendarButton',
		ClubInfoButton = 'ClubInfoButton',
		ProfileButton = 'ProfileButton',
		EditProfileButton = 'EditProfileButton'
	}

	export enum TabNames {
		News = 'News',
		Events = 'Events',
		Members = 'Members',
		Profile = 'Profile',
		Menu = 'Menu',
		Calendar = 'Calendar',
		Club = 'Club',
		Services = 'Services',
		Reservation = 'Reservation'
	}

	// --------------------------------
	// Website
	// --------------------------------

	export interface Website {
		_id?: Types.ObjectId
		status: string
		quickLinks: QuickLink[]
		coverImage: Image.Model
		publicCoverImages?: Image.Model[]
		placeholderImage?: Image.Model
	}

	export interface QuickLink {
		_id?: Types.ObjectId
		orderingIndex: number
		title: string
		link: string
	}
}

export default Club
