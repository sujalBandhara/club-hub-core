import { Types } from 'mongoose';
export declare namespace Image {
    interface Model {
        _id?: Types.ObjectId;
        original?: string;
        lg?: string;
        md?: string;
        sm?: string;
        xs?: string;
        micro?: string;
        aspectRatio?: number;
    }
}
export default Image;
