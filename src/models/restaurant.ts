// External Dependencies.
import { Types } from 'mongoose'

// Models.
import Club from './club'

// Sub Models.
import Location from './subModels/shared/location'
import Image from './subModels/shared/image'
import IShared from './shared'

namespace Restaurant {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		name?: string
		clubID?: Types.ObjectId | Club.Model
		image?: Image.Model
		description?: string
		location?: Location.Model
		menus?: Menu[]
        menuItems?: MenuItem[]
        menuSections?: MenuSection[]
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export interface Menu {
		_id?: Types.ObjectId
		name?: string
		hours: IShared.HoursOfOperation[]
		description?: string
	}
	
	export interface MenuItem {
		_id?: Types.ObjectId
		name?: string
		price?: number
		available?: boolean
		sku?: string
        description?: string
        sectionID?: Types.ObjectId
		menuID?: Types.ObjectId
    }
    
    export interface MenuSection {
        _id?: Types.ObjectId
        orderingIndex: number
        name: string
        menuID: Types.ObjectId
    }
	
}

export default Restaurant
