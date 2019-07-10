import { Types } from 'mongoose';
import Image from './subModels/shared/image';
declare namespace Product {
    interface Model {
        _id?: Types.ObjectId;
        clubID?: Types.ObjectId;
        name?: string;
        active?: boolean;
        description?: string;
        images?: Image.Model[];
        type?: Type;
        amount?: number;
        taxable?: boolean;
    }
    enum Type {
        Item = "Item",
        Service = "Service"
    }
}
export default Product;
