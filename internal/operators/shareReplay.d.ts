import { IScheduler } from '../Scheduler';
import { MonoTypeOperatorFunction } from '../types';
/**
 * @method shareReplay
 * @owner Observable
 */
export declare function shareReplay<T>(bufferSize?: number, windowTime?: number, scheduler?: IScheduler): MonoTypeOperatorFunction<T>;
