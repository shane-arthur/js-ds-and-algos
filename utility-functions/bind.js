
function sample(firstName, secondName) {
	console.log(`${firstName} ${secondName} is a ${this.type}`);
}


function bind(context, ...params){
	
  return (...nextParams) => {
  	this.apply(context, [...params, ...nextParams]);
  };

}

Function.prototype.bind = bind;

const funcCall = sample.bind({type: 'cool guy'});

console.log(funcCall('Shane', 'Arthur'));
