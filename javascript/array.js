// the way we can declare array are 2 methods in js
// 1. declaration array using array constructor
// 2. declaration array using  literal nation []
// let arrayValueConstructor = new Array ("apple","banana","orange",24);
// console.table([arrayValueConstructor]);
// let arrayValueWithLiternalNotation =["apple","banana","orange",24];
// console.table([arrayValueWithLiternalNotation]);
// const numbers = [1,2,3,4,5,];
// numbers.reverse((a,b) => a - b);
// console.log(numbers);


// 1 spread operator (...)

// 3. slice() let
let original =[1,2,3,4,5];
console.log ("using spead to copy array ");
let copy ArrayUsingspead =[...original];
consol.talble([copyArrayUsingSpraed]);
 console.log("Using Array .from () to copy Array");
 let copyArrayUsingFromMethod = Array.from(original);
 console.table([copyArrayUsingFromMethod]);
 console.log("Using slice to copy Array");
 let copyArrayUsingFromMethod = original.slice();
 console.table([copyArrayUsingSliceMethod]);