// External Dependencies
import { Types } from 'mongoose'

export namespace Location {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		_id?: Types.ObjectId
		name?: string
		address1?: string
		address2?: string
		city?: string
		state?: string
		zip?: string
		contactName?: string
		phone?: string
		email?: string
	}
}

export default Location

