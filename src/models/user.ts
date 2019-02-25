// External Dependencies
import { Types } from 'mongoose'

// Sub Documents.
import CarMeta from './subModels/car'
import GolfMeta from './subModels/golf'

export namespace User {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		address?: string
		admin?: boolean
		birthday?: Date | null
		city?: string
		clubID?: Types.ObjectId
		remoteID?: string
		email?: string
		firstName?: string
		jobTitle?: string
		joined?: Date
		lastName?: string
		location?: string
		middleName?: string
		password?: string
		phone?: string
		photoURL?: string
		state?: string
		username?: string
		zip?: string
		groups?: string[]
		memberNumber?: string
		membershipType?: Types.ObjectId
		maritalStatus?: MaritalStatus
		memberStatus?: MemberStatus
		meta?: UserMeta
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
	}
}

export default User
