function DataSource() {
    let index = 0;
    this._id = setInterval(() => this.emit(index++), 1000);
}

DataSource.prototype.emit = function (n) {
    const limit = 10;
    if (this.onData) {
        this.onData(n);
    }

    if (n === limit) {
        if (this.onComplete) {
            this.onComplete();
        }
        this.destroy();
    }
}

DataSource.prototype.destroy = function () {
    clearInterval(this._id);
}

function Observable(observer){
    const dataSource = new DataSource();
    dataSource.onData = (e) => observer.next(e);
    dataSource.onError = (err) => observer.error(err);
    dataSource.onComplete = () => observer.complete();

    return () => dataSource.destroy();
}

const unsub = Observable({
    next(x) { console.log(x); },
    error(err) { console.error(err); },
    complete() { console.log('done')}
  });