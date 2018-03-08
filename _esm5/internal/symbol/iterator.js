/** PURE_IMPORTS_START  PURE_IMPORTS_END */
export function getSymbolIterator() {
    /* NOTE: Warning users that they don't have a Symbol.iterator
       polyfill. We don't want to throw on this, because it's not required
       by the library. However it will provide clues to users on older
       browsers why things like `from(iterable)` doesn't work. */
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        console.warn('RxJS: Symbol.iterator does not exist, so things like from(iterable) won\'t work');
        return '@@iterator';
    }
    return Symbol.iterator;
}
export var iterator = /*@__PURE__*/ getSymbolIterator();
/**
 * @deprecated use {@link iterator} instead
 */
export var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map
