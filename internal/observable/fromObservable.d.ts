import { Observable } from '../Observable';
import { IScheduler } from '../Scheduler';
import { ObservableLike } from '../types';
export declare function fromObservable<T>(input: ObservableLike<T>, scheduler: IScheduler): Observable<T>;
