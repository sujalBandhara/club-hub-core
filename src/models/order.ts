// External Dependencies.
import { Types } from 'mongoose'

// Models
import Restaurant from  './restaurant'
import Club from  './club'
import User from  './user'

namespace Order {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		clubID?: Types.ObjectId | Club.Model
		userID?: Types.ObjectId | User.Model
		restaurantID?: Types.ObjectId | Restaurant.Model
		submittedAt?: Date
		notes?: string
		items?: Item[]
		status?: Status
		tax?: number
		fees?: number
		totalPrice?: number
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------
	
	export interface ProposedOrder {
		clubID: string
		userID: string
		restaurantID: string
		items: ProposedItem[]
	}

	export interface Item {
		menuItem: Restaurant.MenuItem,
		notes?: string
		quantity?: number,
	}
	
	export enum Status {
		Completed = 'COMPLETED',
		Accepted = 'ACCEPTED',
		Confirmed = 'CONFIRMED',
		Pending = 'PENDING',
		Rejected = 'REJECTED'
	}

	/** 
	 * This is the interface coming in the Order POST / PUT request
	 */
	export interface ProposedItem {
		menuItemID: Types.ObjectId
		quantity: number
		notes: string
	}
}

export default Order
