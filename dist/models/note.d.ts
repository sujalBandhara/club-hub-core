import { Types } from 'mongoose';
import IShared from './shared';
declare namespace Note {
    interface Model extends IShared.Timestamps {
        _id?: Types.ObjectId;
        userID: Types.ObjectId;
        clubID: Types.ObjectId;
        createdBy: Types.ObjectId;
        updatedBy?: Types.ObjectId;
        text: string;
    }
}
export default Note;
