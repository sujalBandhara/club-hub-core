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
		redeemUserID?: Types.ObjectId
		inviteeFirstName?: string
		inviteeLastName?: string
		inviteeEmail?: string
		code?: string
		inviteURL?: string
		inviteePhone?: string
		type?: Type
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
}

export default Invitation
