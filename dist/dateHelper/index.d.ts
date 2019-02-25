export interface DateInterface {
    day: number;
    longMonth: string;
    shortMonth: string;
    year: number;
    fullDate: string;
    startTime: string;
    endTime?: string;
}
/**
 * Returns a stringified Epoch timestamp using values from the date and time picker.
 * @param date Date string - (2018-03-01)
 * @param time Time string - (17:30)
 * new Date(year, month (0 = Jan), day, hours, minutes, seconds, milliseconds).getTime()
 */
export declare const createDateTimestamp: (date: string, time: string) => string;
/**
 * Returns a DateInterface
 * @param timestamp Epoch Timestamp
 */
export declare const dateFromTimestamp: (startTimestamp: string, endTimestamp?: string) => DateInterface;
