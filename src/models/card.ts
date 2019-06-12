// External Dependencies.
import { Types } from 'mongoose'

// Sub Documents.
import Location from './subModels/shared/location'
import IShared from './shared'

namespace Card {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		clubID?: Types.ObjectId
		userID?: Types.ObjectId		
		remoteID?: string
		holderName?: string
		location?: Location.Model
		brand?: Brand
		cvcCheck?: CVCCheck
		last4?: number
		expireMonth?: number
		expireYear?: number
		funding?: Funding
		metadata?: IShared.GeneralMap<any>
		fingerprint?: string // Uniquely identifies a card number.
	}

	export enum Brand {
		AmericanExpress = 'American Express',
		DinersClub = 'Diners Club',
		Discover = 'Discover',
		JCB = 'JCB',
		MasterCard = 'Master Card',
		UnionPay = 'Union Pay',
		Visa = 'Visa',
		Unknown = 'Unknown' 
	}

	export enum Funding {
		Credit = 'Credit',
		Debit = 'Debit',
		Prepaid = 'Prepaid',
		Unknown = 'Unknown'
	}

	export enum CVCCheck {
		Pass = 'Pass',
		Fail = 'Fail',
		Unavailable = 'Unavailable',
		Unchecked = 'Unchecked'
	}
}

export default Card
