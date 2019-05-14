// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'
import Message from './message'

// Shared Interfaces.
import IShared from './shared'

namespace Notification {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		clubID?: Types.ObjectId
		recipient: Types.ObjectId | User.Model
		message: Types.ObjectId | Message.Model
		method: Message.DeliveryType
		remoteID: string
		metadata: IShared.GeneralMap<any>
		status: Status
	}

	export enum Status {
		Delivered = 'DELIVERED',
		Read = 'READ',
		Error = 'ERROR'
	}
}

export default Notification
