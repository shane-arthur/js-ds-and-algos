
var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];
   
  const output = partition(users, function(o) { return o.active; });
console.log(output);

function _partition(collection, fn){
    const validOutput = [];
    const invalidOutput = [];

    for (const item of collection){
        if (fn.apply(this, item)){
            validOutput.push(item);
        } else {
            invalidOutput.push(item);
        }
    }

    return [[...validOutput], [...invalidOutput]];

}