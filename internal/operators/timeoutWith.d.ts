import { IScheduler } from '../Scheduler';
import { ObservableInput, OperatorFunction, MonoTypeOperatorFunction } from '../types';
export declare function timeoutWith<T>(due: number | Date, withObservable: ObservableInput<T>, scheduler?: IScheduler): MonoTypeOperatorFunction<T>;
export declare function timeoutWith<T, R>(due: number | Date, withObservable: ObservableInput<R>, scheduler?: IScheduler): OperatorFunction<T, T | R>;
