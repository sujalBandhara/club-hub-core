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
		recipient: Types.ObjectId | User.Model
		message: Types.ObjectId | Message.Model
		method: Message.DeliveryType
		remoteID: string
		metadata: IShared.GeneralMap<any>
	}
}

export default Notification
