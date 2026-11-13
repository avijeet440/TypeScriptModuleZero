//type alias vs interface

// ?Interface is generally connected to objects
//?Type alias is connected to Literals, unions, tuples, primitives

type id= number;
//!interface id number;
type Role= "admin" |"member";

//!interface Role "admin" |"member";

interface User{
    name:string,
    id:id,
    role:Role
}
const user:User ={
    name:"avi",
    id:123,
    role:"admin"
}

//TODO:Interface

interface Animal{
    species:string;
}
interface Cat extends Animal{
    breed:string;
}

const cat:Cat={
    species:'Felix Catus',
    breed:"Persian",
}

console.log(cat)

//TODO:Type alias

type vehicle={
    brand:string;
}
type Car= vehicle & {//?and symbol is used to perform intersection
    model:string;
}

const car:Car={
    brand:"Honda",
    model:"Accord"
}
console.log(car)

//? type er kkhetre amra same name er duita type create korte parbo na, 
//? kintu interface er kkhetre amra same name er duite interface create korete parbo.

interface Employ{
    name:string;
}
interface Employ{
    id:number;
}

const emp:Employ={
    name:'Avi',
    id:28
    
}

console.log(emp);

// type employ={
// name:string;
// }
// type employ={
//     id:number;
// ?but in the case of type you cannot create the same name twice like interface }



