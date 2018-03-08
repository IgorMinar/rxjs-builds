import { Observable } from '../../internal/Observable';
export declare function staticNever(): Observable<never>;
declare module '../../internal/Observable' {
    namespace Observable {
        let never: typeof staticNever;
    }
}
