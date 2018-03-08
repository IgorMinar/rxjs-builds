/** PURE_IMPORTS_START .._.._operators_publishBehavior PURE_IMPORTS_END */
import { publishBehavior as higherOrder } from '../../operators/publishBehavior';
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
export function publishBehavior(value) {
    return higherOrder(value)(this);
}
//# sourceMappingURL=publishBehavior.js.map