const { cssNumber } = require("jquery");

function* myGen(){
    yield 10;
    yield 20;
    yield 30;
}

const genObj=myGen();

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
