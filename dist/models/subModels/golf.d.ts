import { Types } from 'mongoose';
declare namespace GolfMeta {
    interface Model {
        _id?: Types.ObjectId;
        golfBag?: GolfBagModel;
    }
    interface GolfBagModel {
        _id?: Types.ObjectId;
        bagNumber?: string;
    }
}
export default GolfMeta;
