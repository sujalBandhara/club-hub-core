import User from './user';
import Club from './club';
import Restaurant from './restaurant';
declare namespace Session {
    interface Login {
        club: Club.Model;
        token: string;
        user: User.Model;
    }
    interface State {
        restaurants: Restaurant.Model[];
        users: User.Model[];
        club: Club.Model;
    }
}
export default Session;
