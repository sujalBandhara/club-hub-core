import { Types } from 'mongoose';
declare namespace CarMeta {
    interface Model {
        _id?: Types.ObjectId;
        vehicles?: Vehicle[];
        leadID?: string;
        tenantID?: string;
        pushToken?: string;
    }
    interface Vehicle {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        make?: string;
        model?: string;
        year?: string;
        color?: string;
        description?: string;
        vehicleNumber?: string;
        stallNumber?: string;
        vin?: string;
    }
}
export default CarMeta;
