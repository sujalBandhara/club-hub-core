// External Dependencies.
import { Types } from 'mongoose'

namespace BankAccount {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		_id?: Types.ObjectId

		clubID?: Types.ObjectId
		userID?: Types.ObjectId
		productID?: Types.ObjectId
		name?: string
		description?: string
		active?: boolean
		cancelAt?: Date
		cancelledAt?: Date
		currentPeriodStart?: Date
		cancelAtPeriodEnd?: boolean
		interval?: Interval
		intervalCount?: number
	}

	export enum Interval {
		Day = 'Day',
		Week = 'Week',
		Monthly = 'Monthly',
		Yearly = 'Yearly'
	}
}

export default BankAccount