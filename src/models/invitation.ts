// External Dependencies.
import { Types } from 'mongoose'

namespace Invitation {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		clubID?: Types.ObjectId
		inviterID?: Types.ObjectId
		inviteeID?: Types.ObjectId
		code?: string
		inviteURL?: string
		type?: Type
		inviteStatus?: Status
		createdAt?: Date
		updatedAt?: Date
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum Type {
		NewMember = 'NEW_MEMBER',
		Guest = 'GUEST_MEMBER'
	}

	export enum Status {
		Accepted = 'ACCEPTED',
		Pending = 'PENDING'
	}
}

export default Invitation
