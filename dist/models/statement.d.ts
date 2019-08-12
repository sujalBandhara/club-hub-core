import { Types } from 'mongoose';
import Location from './subModels/shared/location';
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
        remoteID?: string;
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
    interface Ticket {
        _id: Types.ObjectId;
        remoteID?: string;
        memberId: number;
        memberNumber: string;
        ticketDate: Date;
        employeeId: number;
        ticketStatusId: number;
        locationId: number;
        stationId: number;
        periodId: number;
        tableId: number;
        voidReasonId: number;
        recipMemberName: string;
        recipMemberNumber: string;
        recipMemberLastName: string;
        exportStatus: number;
        ticketNumber: string;
        wasVoided: boolean;
        voidedBy: number;
        taxExempt: boolean;
        serviceChargeExempt: boolean;
        wasReopened: boolean;
        reopenedBy: number;
        wasRetendered: boolean;
        retenderedBy: number;
        voidReason: string;
        closedTime: Date;
        voidedTime: Date;
        reopenedTime: Date;
        retenderedTime: Date;
        lastUpdate: Date;
        updateBy: number;
        memberFirstName: string;
        memberLastName: string;
        memberName: string;
        number: string;
        numberSuffix: string;
        ticketHeaderId: number;
    }
    interface TicketDetail {
        _id: Types.ObjectId;
        remoteId?: string;
        ticketHeaderId: number;
        lineNumber: number;
        itemId: number;
        itemDesc: string;
        quantity: number;
        price: number;
        cost: number;
        seatNumber: number;
        note: string;
        gratuityTotal: number;
        taxTotal: number;
        voidReason: string;
        itemTypeId: number;
        itemTypeDescription: string;
        deleted: false;
        modifierText: string;
        revCode: string;
        discountRevCode: string;
        revenueCodeId: number;
        revenueCodeDesc: string;
        ticketDetailId: number;
        voidedBy: number;
        wasVoided: false;
        sectionHeaderId: number;
        lastUpdate: Date;
        updateBy: number;
        firedTime: Date;
        itemAddedBy: number;
        gratuityDiscountTotal10: number;
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
