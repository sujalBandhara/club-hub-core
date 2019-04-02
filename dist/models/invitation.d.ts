import { Types } from 'mongoose';
declare namespace Invitation {
    interface Model {
        _id?: Types.ObjectId;
        clubID?: Types.ObjectId;
        inviterID?: Types.ObjectId;
        redeemUserID?: Types.ObjectId;
        inviteeFirstName?: string;
        inviteeLastName?: string;
        inviteeEmail?: string;
        code?: string;
        inviteURL?: string;
        inviteePhone?: string;
        type?: Type;
        createdAt?: Date;
        updatedAt?: Date;
    }
    enum Type {
        NewMember = "NEW_MEMBER",
        Guest = "GUEST_MEMBER"
    }
}
export default Invitation;
