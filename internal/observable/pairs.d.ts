import { Observable } from '../Observable';
import { IScheduler } from '../Scheduler';
/**
 * Convert an object into an observable sequence of [key, value] pairs
 * using an optional IScheduler to enumerate the object.
 *
 * @example <caption>Converts a javascript object to an Observable</caption>
 * var obj = {
 *   foo: 42,
 *   bar: 56,
 *   baz: 78
 * };
 *
 * var source = Rx.Observable.pairs(obj);
 *
 * var subscription = source.subscribe(
 *   function (x) {
 *     console.log('Next: %s', x);
 *   },
 *   function (err) {
 *     console.log('Error: %s', err);
 *   },
 *   function () {
 *     console.log('Completed');
 *   });
 *
 * @param {Object} obj The object to inspect and turn into an
 * Observable sequence.
 * @param {Scheduler} [scheduler] An optional IScheduler to run the
 * enumeration of the input sequence on.
 * @returns {(Observable<[string, T]>)} An observable sequence of
 * [key, value] pairs from the object.
 */
export declare function pairs<T>(obj: Object, scheduler?: IScheduler): Observable<[string, T]>;
