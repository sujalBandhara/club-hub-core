import { Types } from 'mongoose';
import Club from './club';
import Location from './subModels/shared/location';
import Image from './subModels/shared/image';
import IShared from './shared';
declare namespace Restaurant {
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        clubID?: Types.ObjectId | Club.Model;
        image?: Image.Model;
        description?: string;
        location?: Location.Model;
        menus?: Menu[];
        menuItems?: MenuItem[];
        menuSections?: MenuSection[];
    }
    interface Menu {
        _id?: Types.ObjectId;
        name?: string;
        hours: IShared.HoursOfOperation[];
        description?: string;
    }
    interface MenuItem {
        _id?: Types.ObjectId;
        name?: string;
        price?: number;
        available?: boolean;
        sku?: string;
        description?: string;
        sectionID?: Types.ObjectId;
        menuID?: Types.ObjectId;
    }
    interface MenuSection {
        _id?: Types.ObjectId;
        orderingIndex: number;
        name: string;
        menuID: Types.ObjectId;
    }
}
export default Restaurant;
