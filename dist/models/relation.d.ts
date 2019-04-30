import { Types } from 'mongoose';
declare namespace Relation {
    interface Model {
        _id?: Types.ObjectId;
        primaryID: Types.ObjectId;
        relationID: Types.ObjectId;
        type: RelationType;
    }
    enum RelationType {
        Child = "child",
        Spouse = "spouse"
    }
}
export default Relation;
