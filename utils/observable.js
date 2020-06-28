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
        if (this.handler._unsubscribe) {
            this.handler._unsubscribe();
        }
    }

}

class Observable {

    constructor(setup) {

        this._setup = setup;

    }

    static from(values) {
        return new Observable(observer => {
            for (const val of values) {
                observer.next(val);
            }
            observer.complete();
            return () => console.log('observable.from : unsubbed!');
        });
    }

    static interval(timer) {

        let i = 0;
        return new Observable(observer => {

            const intervalId = setInterval(() => observer.next(++i), timer);

            return () => {
                clearInterval(intervalId);
                console.log('Observable.interval: unsubscribed');
            };

        });

    }

    static fromEvent(element, event) {
        return new Observable(observer => {
            const eventHandler = (event) => observer.next(event);
            element.addEventListener(event, eventHandler, false);

            return () => {
                element.removeEventListener(eventName, element, false);
                console.log('Observable.fromEvent: unsubscribed');
            }

        });
    }

    subscribe(handler) {
        const observer = new Observer(handler);
        observer._unsubscribe = this._setup(observer);

        return {
            unsubscribe: () => observer.unsubscribe()
        };

    }
}

const handler = {

    next(val) {
        console.log(val);
    },
    error(err) {
        console.error(err);
    },
    complete() {
        console.info('complete');
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const element = document.querySelector('button[name="shanes-button"]');

    const event$ = Observable.fromEvent(element, 'click');
    const sub = event$.subscribe(handler);

});