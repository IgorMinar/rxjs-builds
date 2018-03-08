import { Observable } from '../Observable';
import { IScheduler } from '../Scheduler';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { UnaryFunction, MonoTypeOperatorFunction, OperatorFunction } from '../types';
export declare function publishReplay<T>(bufferSize?: number, windowTime?: number, scheduler?: IScheduler): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export declare function publishReplay<T, R>(bufferSize?: number, windowTime?: number, selector?: OperatorFunction<T, R>, scheduler?: IScheduler): OperatorFunction<T, R>;
export declare function publishReplay<T>(bufferSize?: number, windowTime?: number, selector?: MonoTypeOperatorFunction<T>, scheduler?: IScheduler): MonoTypeOperatorFunction<T>;
