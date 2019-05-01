// External Dependencies
import { Types } from 'mongoose'

// Models
import Note from './note'

// Sub Documents.
import CarMeta from './subModels/car'
import GolfMeta from './subModels/golf'
import Location from './subModels/shared/location'

// Constants
import * as Constants from '../constants'
import Image from './subModels/shared/image'

namespace User {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		title: string
		suffix: string
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
		phone?: string
		image?: Image.Model
		username?: string
		groups?: string[]
		memberNumber?: string
		membershipType?: Types.ObjectId
		maritalStatus?: MaritalStatus
		memberStatus?: MemberStatus
		meta?: UserMeta
		displaySettings?: DisplaySettings
		agentAccessCode?: string
		hostIDs?: Types.ObjectId[]
		primaryAccountHolder?: boolean
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum DefaultUserGroups {
		AllAdmins = 'All Admins',
		AllMembers = 'All Members'
	}

	export interface UserGroup {
		_id?: Types.ObjectId
		name: string
		description?: string
		users?: Types.ObjectId[] | Model[]
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
	}
}

export default User
