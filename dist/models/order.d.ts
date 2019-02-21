import { Types } from 'mongoose';
import Restaurant from './restaurant';
import Club from './club';
import User from './user';
declare namespace Order {
    interface Model {
        clubID?: Types.ObjectId | Club.Model;
        userID?: Types.ObjectId | User.Model;
        restaurantID?: Types.ObjectId | Restaurant.Model;
        submittedAt?: Date;
        notes?: string;
        items?: Item[];
        status?: Status;
        tax?: number;
        fees?: number;
        totalPrice?: number;
    }
    interface Item {
        menuItem: Restaurant.MenuItem;
        notes?: string;
        quantity?: number;
    }
    enum Status {
        Completed = "COMPLETED",
        Accepted = "ACCEPTED",
        Confirmed = "CONFIRMED",
        Pending = "PENDING",
        Rejected = "REJECTED"
    }
    interface ProposedItem {
        menuItemID: Types.ObjectId;
        quantity: number;
        notes: string;
    }
}
export default Order;
