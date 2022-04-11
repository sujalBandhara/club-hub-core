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
		website?: string
		primary?: boolean // Tells if this is the primary location for contact purposes for the club.   
		country?: string;
        note?:string;
        latitude?:number,
        longitude?:number
	}
}

export default Location

