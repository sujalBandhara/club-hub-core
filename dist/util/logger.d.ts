export default class Logger {
    static info(msg: string, ...meta: any[]): void;
    static trace(msg: string, ...meta: any[]): void;
    static warn(msg: string, ...meta: any[]): void;
    static error(msg: string, ...meta: any[]): void;
    static handleError(err: Error): string;
}
export declare const stream: {
    write: (message: string, encoding: any) => void;
};
