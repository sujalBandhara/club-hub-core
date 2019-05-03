// External Dependencies
import { Types } from 'mongoose'

// --------------------------------------------
// Sub documents for the CarMeta sub model.
// --------------------------------------------

namespace CarMeta {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		vehicles?: Vehicle[]
		leadID?: string
		tenantID?: string
		pushToken?: string
		stallNumbers?: string
		agentAccessCode?: string
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export interface Vehicle {
		_id?: Types.ObjectId
		userID?: Types.ObjectId
		clubID?: Types.ObjectId
		make?: string
		model?: string
		year?: string
		color?: string
		description?: string
		vehicleNumber?: string
		vin?: string
		keySpots?: string
	}
}

export default CarMeta