// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import Image from './subModels/shared/image'

namespace Product {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		_id?: Types.ObjectId
		clubID?: Types.ObjectId
		name?: string
		active?: boolean
		description?: string
		images?: Image.Model[]
		type?: Type
		amount?: number
		taxable?: boolean
	}

	export enum Type {
		Item = 'Item',
		Service = 'Service'
	}
}

export default Product