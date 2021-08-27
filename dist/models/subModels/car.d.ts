import { Types } from 'mongoose';
import Image from './shared/image';
declare namespace CarMeta {
    interface Model {
        _id?: Types.ObjectId;
        vehicles?: Vehicle[];
        leadID?: string;
        tenantID?: string;
        pushToken?: string;
        stallNumbers?: string;
        agentAccessCode?: string;
    }
    interface Vehicle {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        image?: Image.Model;
        make?: string;
        model?: string;
        year?: string;
        color?: string;
        description?: string;
        vehicleNumber?: string;
        vin?: string;
        keySpots?: string;
        bay?: string;
    }
}
export default CarMeta;
