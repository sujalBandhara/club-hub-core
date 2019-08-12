// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import Location from './subModels/shared/location'
import Ticket from './ticket'
import IShared from './shared'

namespace Statement {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		userID?: Types.ObjectId
		clubID?: Types.ObjectId
		remoteID?: string

		// Modeled after Club Tech
		statementMainID?: number
		location?: Location.Model
		balanceTotal?: number
		balance30?: number
		balance60?: number
		balance90?: number
		balance120?: number
		balanceCurrent?: number
		balanceForward?: number
		balanceForwardDate?: Date
		balanceTypeDesc?: number
		creditBookAmount?: number
		creditBookDate?: Date
		detailCount?: number
		lastPaymentAmount?: number
		lastPaymentDate?: Date
		minimumMessage?: string
		headerMessage1?: string
		headerMessage2?: string
		headerMessage3?: string
		lateFeeMessage1?: string
		lateFeeMessage2?: string
		bodyPreMessage?: string
		bodySubMessage?: string
		footerMessage?: string
		details?: Detail[]

		// Modeled after Stripe
		status?: Status
		statusTransitions?: StatusTransition
		startingBalance?: number
		amountDue?: number
		amountPaid?: number
		amountRemaining?: number
		billingMethod?: BillingMethod
		dueDate?: Date
		invoiceNumber?: number
		subtotal?: number
		tax?: number
		total?: number
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	export enum Status {
		Draft = 'Draft',
		Open = 'Open',
		Paid = 'Paid',
		Uncollectible = 'Uncollectible',
		Void = 'Void'
	}

	export interface Detail {
		_id?: Types.ObjectId
		ticket?: Ticket.Model
		remoteID?: string
		statementHeaderID?: number
		statementMainID?: number
		transDate?: Date
		description?: string
		reference?: string
		baseAmount?: number
		taxTotal?: number
		serviceChargeTotal?: number
		extension?: number
		isSuppressed?: boolean
		billedFromEntityID?: boolean
	}

	// --------------------------------
	// Interfaces From Stripe
	// --------------------------------

	export interface StatusTransition {
		finalizedAt?: Date
		markedUncollectibleAt?: Date
		paidAt?: Date
		voidedAt?: Date
	}

	export enum BillingMethod {
		ChargeAutomatically = 'Charge Automatically', // Automatically charge the source attached to the customer.
		SendInvoice = 'Send Invoice' // Email invoice to customer with payment instructions.
	}
}

export default Statement
