/** PURE_IMPORTS_START  PURE_IMPORTS_END */
export var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, function (err) {
            // Escaping the Promise trap: globally throw unhandled errors
            setTimeout(function () { throw err; });
        });
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map
