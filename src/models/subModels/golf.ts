// External Dependencies
import { Types } from 'mongoose'

// --------------------------------------------
// Sub documents for the GolfMeta sub model.
// --------------------------------------------

namespace GolfMeta {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		golfBag?: GolfBagModel
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------
	
	export interface GolfBagModel {
		_id?: Types.ObjectId
		bagNumber?: string
	}
}

export default GolfMeta

