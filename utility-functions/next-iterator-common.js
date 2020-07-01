// Create a "shared" function that takes two array iterators
// and returns the numbers common in both arrays.


const i1 = function*() {
    yield*[0, 2, 3, 4, 9, 10];
  };
  const i2 = function*() {
    yield*[1, 2, 9, 10, 14];
  };
  // @param {Iterator} iter1
  // @param {Iterator} iter2
  //
  // @returns {Array} An array of number shared by both arrays
  function shared(iter1, iter2) {}
  const result = shared(i1(), i2()); // [2, 9, 10]
  
  console.log(result);
  
  function shared(x, y) {
     const output = [];
     
     let curr1 = x.next();
     let curr2 = y.next();
     
     while(curr1.done !== true && curr2.done !== true){
                 
          if (curr1.value === curr2.value){
              output.push(curr1.value);
            curr1 = x.next();
          } else if (curr1.value > curr2.value){
              curr2 = y.next();
          } else {
              curr1 = x.next();
          }
     }
     
     return output;
     
  }
  