const addTwo=(a:number, b:number)=>{
    return a+b;
}
console.log(addTwo(2,3));

//Literal Type

type Status="Pending"
const status:Status="Pending";
console.log(status);

//Basic Union

type Identity = string | number;
const id: Identity="29";
console.log(id);

// Literal Union

type Role= "admin"|"user";
const userRole:Role="admin";
console.log(userRole);


//Object Union

type Admin= {
    id:number,
    role:"admin",
    privileges:string[]
}
type Member= {
    id:number,
    role:"member",
   plan:string[]

}

type User=Admin|Member;
const user:User={id:28, role:"admin",privileges:["abc", "def"]};