// External Dependencies.
import { Types } from 'mongoose'

namespace Relation {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	export interface Model {
        _id?: Types.ObjectId
        clubID: Types.ObjectId
        firstID: Types.ObjectId
        firstType: RelationType
        secondID: Types.ObjectId
        secondType: RelationType
    }
    
    // The RelationType represents the relationship
    // of the primary to the relation
    export enum RelationType {
        Parent = 'parent',
        Child = 'child',
        Spouse = 'spouse',
        Sibling = 'sibling',
    }
}

export default Relation
