import { Types } from 'mongoose';
export declare type CoreModelID = Types.ObjectId;
export interface MongoObject {
    _id?: Types.ObjectId;
}
