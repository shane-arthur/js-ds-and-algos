function promisify(fn, manyArgs = false){
    return function(...args){
        return new Promise((resolve, reject) => {
            function callBack(err, ...result){
                if (err){
                    reject(err)
                } else {
                resolve(manyArgs ? results: results[0]);
                }
            }

            args.push(callBack);

            fn.apply(this, args);

        });
    }
}