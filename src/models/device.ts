// External Dependencies.
import { Types } from 'mongoose'

namespace Device {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		userID?: Types.ObjectId
		clubID?: Types.ObjectId
		token?: string
		os?: string
		version?: string
		timezone?: string
		oneSignalID?: string
	}
}

export default Device
