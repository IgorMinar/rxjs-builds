import { Observable } from '../../Observable';
import { IScheduler } from '../../Scheduler';
import { ObservableInput } from '../../types';
export declare function expand<T, R>(this: Observable<T>, project: (value: T, index: number) => ObservableInput<R>, concurrent?: number, scheduler?: IScheduler): Observable<R>;
export declare function expand<T>(this: Observable<T>, project: (value: T, index: number) => ObservableInput<T>, concurrent?: number, scheduler?: IScheduler): Observable<T>;
