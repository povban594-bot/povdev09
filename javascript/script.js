// const message = "welcome everyone ";
// console.log("the data type of message: ", typeof (meassage));
// const money = 2500;
// console.log ("the data type of salary" , typeof (money));
// const salary = 2000.50;
// console.log("the data type of salary :",typeof(salary));
// const bigNumber = 123456780n;
// console.log("the data type of bigNumber:",typeof(bigNumber));
// const istrue =true;
// console.log("the data type of istrue:",typeof(istrue));
// let undifinedValue;
// console.log("the data type of undefinedValue:",typeof(undifinedValue));
// let dataofNull = null;
// console.log("the data type of dataofNull:",typeof(dataofNull));
// let symbolsdata = Symbol("symbols");
// console.log("the data type of symbol:",typeof(sybolsdata));
// let object ={
//     firstName : "john",
//     lastName: "kaa",
//     age : 25
// };
// console.log("the data type of object :",typeof(object));
const person =
{
    firstName:"john",

    lastNAme: "sima",
    age : 25,
    salary: 500,
    isMarrrided :false
};
console.log ("the name of person: ", person.firstName);
person.firstName = "Nita";
console.log ("the name of person: ",person.firstName);
console.table([person])