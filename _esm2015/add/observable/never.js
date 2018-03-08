import { Observable } from '../../internal/Observable';
import { NEVER } from '../../internal/observable/never';
export function staticNever() {
    return NEVER;
}
Observable.never = staticNever;
//# sourceMappingURL=never.js.map