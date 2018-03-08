import { Observable } from '../Observable';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { UnaryFunction, MonoTypeOperatorFunction, OperatorFunction, SchedulerLike } from '../types';
export declare function publishReplay<T>(bufferSize?: number, windowTime?: number, scheduler?: SchedulerLike): UnaryFunction<Observable<T>, ConnectableObservable<T>>;
export declare function publishReplay<T, R>(bufferSize?: number, windowTime?: number, selector?: OperatorFunction<T, R>, scheduler?: SchedulerLike): OperatorFunction<T, R>;
export declare function publishReplay<T>(bufferSize?: number, windowTime?: number, selector?: MonoTypeOperatorFunction<T>, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
