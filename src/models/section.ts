// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import { RichContent } from './subModels/shared/richContent'
import IShared from './shared'

namespace Section {
    
    // --------------------------------
	// Main Interface
    // --------------------------------
    
    export interface Model extends IShared.Timestamps {
        _id?: Types.ObjectId
        clubID: Types.ObjectId
        name: string
        pages: Page[]
        createdBy: Types.ObjectId
        updatedBy: Types.ObjectId
    }

	// --------------------------------
	// Supporting Interfaces and Types
    // --------------------------------
    
    export interface Page extends IShared.Timestamps {
        _id?: Types.ObjectId
        sectionID: Types.ObjectId
        name: string
        content: RichContent.Model
        createdBy: Types.ObjectId
        updatedBy: Types.ObjectId
    }
}

export default Section