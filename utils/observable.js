class Observable {
    constructor(subscribe) {
        this._subscribe = subscribe;
    }

    subscribe(obs) {
        const observer = new Observer(obs);
        observer._unsubscribe = this._subscribe(observer);

        return {
            unsubscribe: observer.unsubscribe()
        }

    }
}

class Observer {
    constructor(handler) {
        this.handler = handler;
        this.isUnsubscribed = false;
    }

    next(val) {
        if (this.handler.next && !this.isUnsubscribed) {
            this.handler.next(val);
        }
    }

    error(err) {
        if (!this.isUnsubscribed) {
            if (this.handler.error) {
                this.handler.error(err)
            }
            this.unsubscribe();
        }
    }

    complete() {
        if (!this.isUnsubscribed) {
            if (this.handler.complete) {
                this.handler.complete()
            }
            this.unsubscribe();
        }
    }

    unsubscribe() {
        this.isUnsubscribed = true;
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }
}

Observable.from = function (values) {
    return new Observable(observer => {
        for (const value of values) {
            observer.next(value);
        }
        observer.complete();
        return () => console.log('observable.from : unsubscribed');
    });
}

const numbers$ = Observable.from([0, 1, 2, 3, 4]);
const subscription = numbers$.subscribe({
    next(value) {
        console.log(value);
    },
    error(err) {
        console.error(err);
    },
    complete() {
        console.info('done');
    }
});
setTimeout(subscription.unsubscribe, 500);