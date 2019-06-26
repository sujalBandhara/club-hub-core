// External Dependencies.
import { Types } from 'mongoose'

// Models.
import User from './user'

namespace Lottery {

    // --------------------------------
    // Main Interface
    // ---------------------------------

    export interface Model {
        _id?: Types.ObjectId
        clubID: Types.ObjectId
        userID: Types.ObjectId
        acceptableStart?: Date
        acceptableEnd?: Date
        status?: Status
    }

    export enum Status {
        Pending = 'pending',
        Approved = 'approved',
        Moved = 'moved',
		Rejected = 'rejected'
	}
}

export default Lottery