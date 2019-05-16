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
    }
    interface Detail {
        _id?: Types.ObjectId;
        remoteID?: string;
        statementHeaderID?: number;
        statementMainID?: number;
        transDate?: Date;
        reference?: Date;
        description?: string;
        baseAmount?: number;
        taxTotal?: number;
        serviceChargeTotal?: number;
        extension?: number;
        isSuppressed?: boolean;
        billedFromEntityID?: boolean;
    }
}
export default Statement;
