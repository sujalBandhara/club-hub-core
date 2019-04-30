// External Dependencies.
import { Types } from 'mongoose'

namespace Relation {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	export interface Model {
        _id?: Types.ObjectId
        primaryID: Types.ObjectId
        relationID: Types.ObjectId
        type: RelationType
    }
    
    // The RelationType represents the relationship
    // of the primary to the relation
    export enum RelationType {
        Child = 'child',
        Spouse = 'spouse',
    }
}

export default Relation
