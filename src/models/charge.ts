// External Dependencies
import { Types } from 'mongoose'

import Restaurant from './restaurant'

namespace Charge {

    // --------------------------------
    // Main Interface
    // ---------------------------------

    export interface Model {
        _id?: Types.ObjectId
        userID: Types.ObjectId
        clubID: Types.ObjectId
        dueID?: Types.ObjectId
        itemID?: Types.ObjectId | Restaurant.MenuItem
        amount?: number
        description?: string
        taxable?: boolean
    }
}

export default Charge
