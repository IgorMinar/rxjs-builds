import { Observable } from '../../Observable';
import { ObservableInput } from '../../types';
export declare function switchMapTo<T, R>(this: Observable<T>, observable: ObservableInput<R>): Observable<R>;
export declare function switchMapTo<T, I, R>(this: Observable<T>, observable: ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): Observable<R>;
