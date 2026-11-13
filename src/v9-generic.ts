const identity=(value:string):string=>{
    return value;
}

console.log(identity("Avijeet"));
// console.log(identity(30)); ekhane number dukhano jabe na kenona eta holo string type er taile amake arekta function banate hobe.
function identityString(value: string): string {
    return value;
}

function identityNumber(value: number): number {
    return value;
}
console.log(identityString("Ami"));
console.log(identityNumber(123));


// kintu ei somosya somadha korte pare ekmatro generic.

//Generic Function

const identityType=<T>(value:T):T=>{
return value;
}
console.log(identityType<string>("Avi"));
console.log(identityType<number>(100));
console.log(identityType<boolean>(true));
console.log(identityType({name:"Avi"}))

//Generic Function er bastob udaharon

function getArray<T>(items: T[]): T[] {
    return items;
}

const names = getArray<string>(["Avi", "Raj"]);
const numbers = getArray<number>([10, 20, 30]);

console.log(names);
console.log(numbers);


//Generic Interface
//? eta ekta sadharon interface er udharon
interface Box1 {
    value:string;
}
const myBox:Box1={
    value:"Amar"
}

console.log(myBox);
console.log(myBox.value);

//kintu ekhon ami jodi Generic Interface bybohar kori taile nicher moto likhte parbo:

interface Box<T> {
    value: T;
}

const stringBox: Box<string> = {
    value: "Hello"
};

const numberBox: Box<number> = {
    value: 100
};

const booleanBox: Box<boolean> = {
    value: true
};
console.log(stringBox);
console.log(numberBox);
console.log(booleanBox);


// Generic Function আর Generic Interface একসঙ্গে

interface ApiResponse<T> {
    success: boolean;
    data: T;
}

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    price: number;
}

function sendResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data: data
    };
}
console.log(sendResponse<User>({id:23,name:"Avijeetkumardas"}))
console.log(sendResponse<Product>({id:23,price:200}))


const userResponse = sendResponse<User>({
    id: 1,
    name: "Avi"
});

const productResponse = sendResponse<Product>({
    id: 101,
    price: 500
});
console.log(userResponse);
console.log(productResponse);