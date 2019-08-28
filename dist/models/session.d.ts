import User from './user';
import Club from './club';
import Restaurant from './restaurant';
import { Types } from 'mongoose';
declare namespace Session {
    interface Model {
        _id?: Types.ObjectId;
        user: User.Model | Types.ObjectId;
        lastTouch: Date;
        platform: string;
        os?: string;
        version?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }
    interface Login {
        club: Club.Model;
        token: string;
        user: User.Model;
    }
    interface State {
        restaurants: Restaurant.Model[];
        users: User.Model[];
        club: Club.Model;
        members: User.Model[];
    }
}
export default Session;
