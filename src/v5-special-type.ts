//#Top types
//Any
let x:any="hello";
x=23;
console.log(x);

x.lenght;

//unknown
let something:unknown="Hello "
// something.lenght;


//#Core Types

let y:unknown;
const num:number=19;
y=num;
console.log(y);

type Status ="pending" |"success";
let someStatus:string;

let status:Status="pending";
someStatus=status;
console.log(status);

//#Nullish Types

interface User{
    name:string;
}

type loggedInUser= User|string | null;
const user1: loggedInUser = null;
const user2: loggedInUser = { name: "Rahim" };
const user3: loggedInUser = "Karim";

console.log(user1); // null
console.log(user2); // { name: 'Rahim' }
console.log(user3); // Karim


//#Unit type


const greet=()=>{
    console.log("Hello EveryOne");
}
something=greet();
greet();

//sub-type of unit type:

const anotherGreet=():undefined=>{
    console.log("Hello You")
    return undefined;
}
const greetings=anotherGreet();
const result:void = anotherGreet();
console.log(greetings,result);

//# Bottom type

// const getError=(msg:string)=>{
//     throw new Error(msg);
// }
// let Have:string=getError("error")