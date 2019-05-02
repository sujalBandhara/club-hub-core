import { Types } from 'mongoose';
declare namespace Relation {
    interface Model {
        _id?: Types.ObjectId;
        clubID: Types.ObjectId;
        firstID: Types.ObjectId;
        firstType: RelationType;
        secondID: Types.ObjectId;
        secondType: RelationType;
    }
    enum RelationType {
        Parent = "parent",
        Child = "child",
        Spouse = "spouse",
        Sibling = "sibling"
    }
}
export default Relation;
