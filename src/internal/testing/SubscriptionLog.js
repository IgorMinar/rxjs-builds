export class SubscriptionLog {
    constructor(subscribedFrame, unsubscribedFrame = Number.POSITIVE_INFINITY) {
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
}
