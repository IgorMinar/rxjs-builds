import { throwError as staticThrowError } from '../../internal/observable/throwError';
declare module '../../internal/Observable' {
    namespace Observable {
        let throwError: typeof staticThrowError;
    }
}
