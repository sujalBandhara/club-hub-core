import { Types } from 'mongoose';
import User from './user';
declare namespace Room {
    interface Model {
        _id?: Types.ObjectId;
        participants: Types.ObjectId[] | User.Model[];
        clubID: Types.ObjectId;
        remoteID: string;
        name: string;
        private: boolean;
    }
}
export default Room;
