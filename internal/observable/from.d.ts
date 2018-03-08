import { Observable } from '../Observable';
import { IScheduler } from '../Scheduler';
import { ObservableInput } from '../types';
export declare function from<T>(input: ObservableInput<T>, scheduler?: IScheduler): Observable<T>;
export declare function from<T>(input: ObservableInput<ObservableInput<T>>, scheduler?: IScheduler): Observable<Observable<T>>;
