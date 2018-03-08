/* NOTE: Warning users that they don't have a Symbol.iterator
   polyfill. We don't want to throw on this, because it's not required
   by the library. However it will provide clues to users on older
   browsers why things like `from(iterable)` doesn't work. */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
if (!Symbol || !Symbol.iterator) {
    /*@__PURE__*/ console.warn('RxJS: Symbol.observable does not exist');
}
/** The native Symbol.iterator instance or a string */
export var iterator = Symbol && Symbol.iterator || '@@iterator';
/**
 * @deprecated use {@link iterator} instead
 */
export var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map
