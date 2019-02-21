export declare namespace IShared {
    interface GeneralMap<T> {
        [key: string]: T;
    }
    interface QueryOptions {
        limit?: number | string;
        offset?: number | string;
        start?: number | Date | string;
        end?: number | Date | string;
        timeField?: string;
        [key: string]: any;
    }
    interface MongooseError {
        code?: number;
        name?: string;
        errmsg?: string;
        errors?: GeneralMap<ErrorObj>;
        _message?: string;
    }
    interface ErrorObj {
        message: string;
        field: string;
    }
    enum PublicationStatus {
        Draft = "DRAFT",
        Pending = "PENDING",
        Published = "PUBLISHED"
    }
}
export default IShared;
