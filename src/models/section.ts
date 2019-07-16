// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import { RichContent } from './subModels/shared/richContent'
import IShared from './shared'
import Image from './subModels/shared/image'

namespace Section {

    // --------------------------------
    // Main Interface
    // --------------------------------

    export interface Model extends IShared.Timestamps {
        _id?: Types.ObjectId
        clubID: Types.ObjectId
        name: string
        subtitle?: string
        description?: string
        icon?: string
        image?: Image.Model
        status: IShared.PublicationStatus
        pages: Page[]
        orderingIndex: number
        createdBy: Types.ObjectId
        updatedBy: Types.ObjectId
        public?: boolean
    }

    // --------------------------------
    // Supporting Interfaces and Types
    // --------------------------------

    export interface Page extends IShared.Timestamps {
        _id?: Types.ObjectId
        sectionID: Types.ObjectId
        name: string
        content: RichContent.Model
        orderingIndex: number
        createdBy: Types.ObjectId
        updatedBy: Types.ObjectId
    }
}

export default Section