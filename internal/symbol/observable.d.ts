export declare function getSymbolObservable(context: {
    Symbol: SymbolConstructor;
}): symbol;
export declare const observable: symbol;
/**
 * @deprecated use observable instead
 */
export declare const $$observable: symbol;
declare global  {
    interface SymbolConstructor {
        observable: symbol;
    }
}
