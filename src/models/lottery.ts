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
        acceptableStart: Date
        acceptableEnd: Date
    }
}

export default Lottery