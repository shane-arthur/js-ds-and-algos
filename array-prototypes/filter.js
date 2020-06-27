function filter1(fn){
  const output = [];
  
  for(let i = 0; i < this.length; i++){
  	 const item = this[i];
      
       if (fn.call(this, item)){
      	output.push(item);
      }
  }
  
  return output;
  
}

Array.prototype.filter = null;

Array.prototype.filter = filter1;