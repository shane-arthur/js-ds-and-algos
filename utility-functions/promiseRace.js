Promise.race = function(promises){
	
    return new Promise((resolve, reject) => {
        
      for (const promise of promises){
          promise().then(result => {
            resolve(result)
        }).catch(err => reject(err));
      }
      
    });
    
  }
  
  const promise1 = () => new Promise((resolve => setTimeout(() => resolve('first'), 3000)));
  
  const promise2 = () => new Promise((resolve => setTimeout(() => resolve('second'), 4000)));
  
  const promise3 = () => new Promise((resolve => setTimeout(() => resolve('third'), 2000)));
  
  Promise.race([promise1, promise2, promise3]).then(console.log);