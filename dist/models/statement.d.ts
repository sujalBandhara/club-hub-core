import { Types } from 'mongoose';
import Location from './subModels/shared/location';
import Ticket from './ticket';
declare namespace Statement {
    interface Model {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        remoteID?: string;
        statementMainID?: number;
        location?: Location.Model;
        balanceTotal?: number;
        balance30?: number;
        balance60?: number;
        balance90?: number;
        balance120?: number;
        balanceCurrent?: number;
        balanceForward?: number;
        balanceForwardDate?: Date;
        balanceTypeDesc?: number;
        creditBookAmount?: number;
        creditBookDate?: Date;
        detailCount?: number;
        lastPaymentAmount?: number;
        lastPaymentDate?: Date;
        minimumMessage?: string;
        headerMessage1?: string;
        headerMessage2?: string;
        headerMessage3?: string;
        lateFeeMessage1?: string;
        lateFeeMessage2?: string;
        bodyPreMessage?: string;
        bodySubMessage?: string;
        footerMessage?: string;
        details?: Detail[];
        status?: Status;
        statusTransitions?: StatusTransition;
        startingBalance?: number;
        amountDue?: number;
        amountPaid?: number;
        amountRemaining?: number;
        billingMethod?: BillingMethod;
        dueDate?: Date;
        invoiceNumber?: number;
        subtotal?: number;
        tax?: number;
        total?: number;
    }
    enum Status {
        Draft = "Draft",
        Open = "Open",
        Paid = "Paid",
        Uncollectible = "Uncollectible",
        Void = "Void"
    }
    interface Detail {
        _id?: Types.ObjectId;
        ticket?: Ticket.Model;
        remoteID?: string;
        ticketID?: Types.ObjectId;
        statementHeaderID?: number;
        statementMainID?: number;
        transDate?: Date;
        description?: string;
        reference?: string;
        baseAmount?: number;
        taxTotal?: number;
        serviceChargeTotal?: number;
        extension?: number;
        isSuppressed?: boolean;
        billedFromEntityID?: boolean;
    }
    interface StatusTransition {
        finalizedAt?: Date;
        markedUncollectibleAt?: Date;
        paidAt?: Date;
        voidedAt?: Date;
    }
    enum BillingMethod {
        ChargeAutomatically = "Charge Automatically",
        SendInvoice = "Send Invoice"
    }
}
export default Statement;
