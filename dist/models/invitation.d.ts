import { Types } from 'mongoose';
declare namespace Invitation {
    interface Model {
        _id?: Types.ObjectId;
        clubID?: Types.ObjectId;
        inviterID?: Types.ObjectId;
        inviteeID?: Types.ObjectId;
        code?: string;
        inviteURL?: string;
        type?: Type;
        inviteStatus?: Status;
        createdAt?: Date;
        updatedAt?: Date;
    }
    enum Type {
        NewMember = "NEW_MEMBER",
        Guest = "GUEST_MEMBER"
    }
    enum Status {
        Accepted = "ACCEPTED",
        Pending = "PENDING"
    }
}
export default Invitation;
