//#Top types
//Any
let x = "hello";
x = 23;
console.log(x);
x.lenght;
//unknown
let something = "Hello ";
// something.lenght;
//#Core Types
let y;
const num = 19;
y = num;
console.log(y);
let someStatus;
let status = "pending";
someStatus = status;
console.log(status);
const user1 = null;
const user2 = { name: "Rahim" };
const user3 = "Karim";
console.log(user1); // null
console.log(user2); // { name: 'Rahim' }
console.log(user3); // Karim
//#Unit type
const greet = () => {
    console.log("Hello EveryOne");
};
something = greet();
greet();
//sub-type of unit type:
const anotherGreet = () => {
    console.log("Hello You");
    return undefined;
};
const greetings = anotherGreet();
const result = anotherGreet();
console.log(greetings, result);
export {};
//# Bottom type
// const getError=(msg:string)=>{
//     throw new Error(msg);
// }
// let Have:string=getError("error")
//# sourceMappingURL=v5-special-type.js.map