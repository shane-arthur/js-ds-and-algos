// console.log(isBalanced('}{'), // false
//     isBalanced('{{}'), // false
//     isBalanced('{}{}'), // true
//     isBalanced('foo { bar { baz } boo }'), // true
//     isBalanced('foo { bar { baz }'), // false
//     isBalanced('foo { bar } }')); // false


function isBalanced(str) {

    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        const item = str.charAt(i);

        if (item === '}') {
            if (counter !== 0) {
                counter--;
            } else {
                return false;
            }
        } else if (item === '{') {
            counter++;
        }
    }

    counter = 0;
    for (let j = str.length; j >= 0; j--) {
        const item = str.charAt(j);

        if (item === '{') {
            if (counter !== 0) {
                counter--;
            } else {
                return false;
            }
        } else if (item === '}') {
            counter++;
        }
    }

    return true;

}

function isBalanced2(str) {

    str = str.replace(/\w|\s/g, '');
  
    const stack = [];
    const map = {
      '}': '{',
      ')': '(',
      ']': '['
    };
  
    for (let i = 0; i < str.length; i++) {
      const val = str.charAt(i);
  
      if (map[val]) {
        if (map[val] !== stack.pop()) {
          return false;
        }
      } else stack.push(val);
  
    }
  
    return stack.length === 0;
  }
  
  console.log(isBalanced2('(foo { bar (baz) [boo] })'), // true
    isBalanced2('foo { bar { baz }'), // false
    isBalanced2('foo { (bar [baz] } )')); //false
  