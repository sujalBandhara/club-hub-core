import { Types } from 'mongoose';
export declare namespace Location {
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        zip?: string;
        contactName?: string;
        phone?: string;
        email?: string;
        website?: string;
        primary?: boolean;
        country?: string;
        note?:string;
        latitude?:number,
        longitude?:number
    }
}
export default Location;
