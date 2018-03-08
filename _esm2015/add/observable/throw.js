import { Observable } from '../../internal/Observable';
import { throwError as staticThrowError } from '../../internal/observable/throwError';
Observable.throw = staticThrowError;
Observable.throwError = staticThrowError;
//# sourceMappingURL=throw.js.map