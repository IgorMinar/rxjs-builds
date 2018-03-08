import { Observable } from '../Observable';
import { IScheduler } from '../Scheduler';
export declare function fromPromise<T>(input: PromiseLike<T>, scheduler?: IScheduler): Observable<T>;
