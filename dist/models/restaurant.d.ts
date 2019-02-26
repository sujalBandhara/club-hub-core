import { Types } from 'mongoose';
import Club from './club';
import Location from './subModels/shared/location';
declare namespace Restaurant {
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        clubID?: Types.ObjectId | Club.Model;
        imageUrl?: string;
        description?: string;
        location?: Location.Model;
        menus?: Menu[];
        menuItems?: MenuItem[];
        displayGroups?: string[];
    }
    interface Menu {
        _id?: Types.ObjectId;
        name?: string;
        rRule?: string;
        description?: string;
    }
    interface MenuItem {
        _id?: Types.ObjectId;
        menuIDs?: Types.ObjectId[];
        name?: string;
        price?: number;
        available?: boolean;
        sku?: string;
        displayGroup?: string;
        description?: string;
    }
}
export default Restaurant;
