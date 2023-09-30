
function add(a,b){
   const result = a + b; 
return result;
}
console.log(add(5,6));

function subtract(a,b){
    const result = a - b;
    return result;
}
console.log(subtract(58,36));

function multiply(a,b){
const result = a * b;
return result;
}
console.log(multiply(60,90));

function divide(a,b){
    const result = a/b;
    return result;
}
console.log(divide(65,23));

function increment(n){
    const result = n + 1;
    return result;
}
console.log(increment(336));

function decrement(n){
   const result = n - 1;
   return result;
}
console.log(decrement(892));

function makeInt(n){
let num = n;
return num;
}
console.log(makeInt(92));

function makeInt(string){
let num = parseInt(string,10);
return num;
}
console.log(makeInt("0x2328",10));

function preserveDecimal(string){
let num = parseFloat(string);
return num;
}
console.log(preserveDecimal("2.222"));


