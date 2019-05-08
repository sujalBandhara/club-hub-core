import { Types } from 'mongoose';
declare namespace QueryFilter {
    interface Model {
        _id?: Types.ObjectId;
        clubID: Types.ObjectId;
        predicates: Array<NestedPredicate | Predicate>;
        resource: string;
    }
    interface Predicate {
        attribute: string;
        comparison: ComparisonOperator;
        type: string;
        value: string;
    }
    interface NestedPredicate {
        predicates: Array<NestedPredicate | Predicate>;
        type?: NestingType;
    }
    enum NestingType {
        and = "$and",
        or = "$or"
    }
    enum ComparisonOperator {
        eq = "$eq",
        gt = "$gt",
        gte = "$gte",
        in = "$in",
        lt = "$lt",
        lte = "$lte",
        ne = "$ne"
    }
}
export default QueryFilter;
