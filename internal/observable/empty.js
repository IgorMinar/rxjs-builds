"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../Observable");
/**
 * The same Observable instance returned by any call to {@link empty} without a
 * {@link Scheduler}. It is preferrable to use this over `empty()`.
 */
exports.EMPTY = new Observable_1.Observable(function (subscriber) { return subscriber.complete(); });
/**
 * Creates an Observable that emits no items to the Observer and immediately
 * emits a complete notification.
 *
 * <span class="informal">Just emits 'complete', and nothing else.
 * </span>
 *
 * <img src="./img/empty.png" width="100%">
 *
 * This static operator is useful for creating a simple Observable that only
 * emits the complete notification. It can be used for composing with other
 * Observables, such as in a {@link mergeMap}.
 *
 * @example <caption>Emit the number 7, then complete.</caption>
 * var result = Rx.Observable.empty().startWith(7);
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
 * var interval = Rx.Observable.interval(1000);
 * var result = interval.mergeMap(x =>
 *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following to the console:
 * // x is equal to the count on the interval eg(0,1,2,3,...)
 * // x will occur every 1000ms
 * // if x % 2 is equal to 1 print abc
 * // if x % 2 is not equal to 1 nothing will be output
 *
 * @see {@link create}
 * @see {@link never}
 * @see {@link of}
 * @see {@link throw}
 *
 * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
 * the emission of the complete notification.
 * @return {Observable} An "empty" Observable: emits only the complete
 * notification.
 * @static true
 * @name empty
 * @owner Observable
 */
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
exports.emptyScheduled = emptyScheduled;
//# sourceMappingURL=empty.js.map