import { IScheduler } from '../Scheduler';
import { OperatorFunction, TimeInterval as TimeIntervalInterface } from '../types';
export declare function timeInterval<T>(scheduler?: IScheduler): OperatorFunction<T, TimeInterval<T>>;
export declare class TimeInterval<T> implements TimeIntervalInterface<T> {
    value: T;
    interval: number;
    constructor(value: T, interval: number);
}
