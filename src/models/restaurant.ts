// External Dependencies.
import { Types } from 'mongoose'

// Models.
import Club from './club'

// Sub Models.
import Location from './subModels/shared/location'

namespace Restaurant {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		name?: string
		clubID?: Types.ObjectId | Club.Model
		imageUrl?: string
		description?: string
		location?: Location.Model
		menus?: Menu[]
		menuItems?: MenuItem[]
		displayGroups?: string[]
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export interface Menu {
		_id?: Types.ObjectId
		name?: string
		rRule?: string
		description?: string
	}
	
	export interface MenuItem {
		_id?: Types.ObjectId
		menuIDs?: Types.ObjectId[]
		name?: string
		price?: number
		available?: boolean
		sku?: string
		displayGroup?: string
		description?: string
	}
	
}

export default Restaurant
