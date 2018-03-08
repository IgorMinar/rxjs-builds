export const subscribeToPromise = (promise) => (subscriber) => {
    promise.then((value) => {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, (err) => subscriber.error(err))
        .then(null, (err) => {
        // Escaping the Promise trap: globally throw unhandled errors
        setTimeout(() => { throw err; });
    });
    return subscriber;
};
//# sourceMappingURL=subscribeToPromise.js.map