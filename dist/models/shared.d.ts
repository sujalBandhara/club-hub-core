declare namespace IShared {
    interface Timestamps {
        createdAt?: Date;
        updatedAt?: Date;
    }
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
        Published = "PUBLISHED",
        Scheduled = "SCHEDULED",
        Delivered = "DELIVERED",
        Template = "TEMPLATE"
    }
    enum DayOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }
    enum TimePeriod {
        Day = 0,
        Week = 1,
        Month = 2,
        Year = 3
    }
    interface LimitForPeriod {
        period: TimePeriod;
        limit: number;
    }
}
export default IShared;
