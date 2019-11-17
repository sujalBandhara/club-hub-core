// External Dependencies.
import { Types } from 'mongoose'

// Sub Documents.
import User from './user'

namespace Room {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
        _id?: Types.ObjectId
        participants: Types.ObjectId[] | User.Model[]
        clubID: Types.ObjectId
        remoteID: string
        name: string
        private: boolean
	}
}

export default Room
