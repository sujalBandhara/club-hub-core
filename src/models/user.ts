// External Dependencies
import { Types } from 'mongoose'

// Models
import Note from './note'

// Sub Documents.
import QueryFilter from './queryFilter'
import CarMeta from './subModels/car'
import GolfMeta from './subModels/golf'
import Location from './subModels/shared/location'
import Image from './subModels/shared/image'
import PhoneNumber from './subModels/shared/phoneNumber'

// Constants
import * as Constants from '../constants'

namespace User {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		title?: string
		suffix?: string
		firstName?: string
		lastName?: string
		middleName?: string
		addresses?: Location.Model[]
		admin?: boolean
		birthday?: Date | null
		clubID?: Types.ObjectId
		remoteID?: string
		email?: string
		jobTitle?: string
		notes?: Note.Model[]
		company?: string
		website?: string
		joined?: Date
		password?: string
		salt?: string
		phoneNumbers?: PhoneNumber.Model[]
		image?: Image.Model
		username?: string
		groups?: string[]
		memberNumber?: MemberNumber
		membershipType?: Types.ObjectId
		maritalStatus?: MaritalStatus
		memberStatus?: MemberStatus
		meta?: UserMeta
		displaySettings?: DisplaySettings
		hostIDs?: Types.ObjectId[]
		primaryAccountHolder?: boolean
		gender?: string
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export interface MemberNumber {
		number: string
		suffix?: string
	}

	export enum DefaultUserGroups {
		AllAdmins = 'All Admins',
		AllMembers = 'All Members'
	}

	export interface UserGroup {
		_id?: Types.ObjectId
		name: string
		description?: string
		users?: Types.ObjectId[] | Model[]
		queryFilter?: Types.ObjectId | QueryFilter.Model
	}

	export interface UserMeta {
		_id?: Types.ObjectId
		hide?: boolean
		golf?: GolfMeta.Model
		car?: CarMeta.Model
	}

	export enum MaritalStatus {
		Single = 'SINGLE',
		InRelationship = 'IN_RELATIONSHIP',
		Married = 'MARRIED',
		Divorced = 'DIVORCED',
		Widowed = 'WIDOWED',
	}

	export enum MemberStatus {
		Prospect = 'PROSPECT',
		Active = 'ACTIVE',
		Lapsed = 'LAPSED',
		Guest = 'GUEST',
	}

	export interface DisplaySettings {
		publicProfile: boolean
		publicContact: boolean
		canBookReservations: boolean
	}
}

export default User
