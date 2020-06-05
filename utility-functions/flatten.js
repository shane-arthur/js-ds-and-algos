//  const arr = [1, [2, [3], 4, [1, [2, [3], 4],
//          [1, [1, 1, [1, [22]]]]
//      ]],
//      [5]
//  ];

 function flattenRecursively(arr, output = []) {
     for (let i = 0; i < arr.length; i++) {
         const item = arr[i];

         if (Array.isArray(item)) {
             output.push(item);
         } else {
             flattenRecursively(item, output)
         }

     }
 }

 function flattenIteratively(arr) {

     const output = [];
     const stack = [arr];

     while (!!stack.length) {
         const item = stack.pop();
         if (Array.isArray(item)) {
             stack.unshift.apply(stack, item);
         } else {
             output.push(item);
         }
     }

     return output;
 }