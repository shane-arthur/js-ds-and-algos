function generateTask(taskName, callback) {
    const time = 3000;
    const interval = 1000;
    let elapsed = 0;

    const timer = setInterval(() => {
        elapsed += interval;
        if (elapsed >= time) {
            clearInterval(timer);
            callback();
        }

        console.log(taskName);

    }, interval);

}

function Runner(maxTasks) {
    this.taskQueue = [];
    this.maxTasks = maxTasks;
    this.currentTasks = 0;
}

Runner.prototype.run = function () {
    if (this.currentTasks < this.maxTasks) {
        const task = this.taskQueue.shift();
        if (!!task) {
            this.currentTasks++;
            task(() => {
                this.currentTasks--;
                this.run();
            });
        }
    }
}

Runner.prototype.push = function (name) {
    const task = generateTask.bind(this, name);
    this.taskQueue.push(task);
    this.run();
}

let runner = new Runner(3);
runner.push('first');
runner.push('second');
runner.push('third');
runner.push('fourth');
runner.push('fifth');
runner.push('sixth');
runner.push('seventh');
runner.push('eigth');
runner.push('nine');
runner.push('tenth');