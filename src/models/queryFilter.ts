// External Dependencies.
import { Types } from 'mongoose'

namespace QueryFilter {

	// --------------------------------
	// Main Interface
    // --------------------------------

    export interface Model {
        _id?: Types.ObjectId
        clubID: Types.ObjectId
        predicates: Array<NestedPredicate | Predicate>
        resource: string
    }

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

    export interface Predicate {
        attribute: string
        comparison: ComparisonOperator
        type: string
        value: string
    }

    export interface NestedPredicate {
        predicates: Array<NestedPredicate | Predicate>
        type?: NestingType
    }

    export enum NestingType {
        and = '$and',
        or = '$or',
    }

    export enum ComparisonOperator {
        eq = '$eq',
        gt = '$gt',
        gte = '$gte',
        in = '$in',
        lt = '$lt',
        lte = '$lte',
        ne = '$ne',
    }
}

export default QueryFilter
