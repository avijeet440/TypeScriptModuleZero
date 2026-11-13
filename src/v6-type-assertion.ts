//Type Assertion
console.log("TYPE ASSERTION FILE RUNNING");

interface User {
    name: string;
}

let currentUser: unknown = {
    name: "Rahim"
};

const user = currentUser as User;

console.log(user.name);


type Status= "Pending"| "Approved" | "Rejected";
const someStatus:Status="Approved";
const showStatus=(status:Status)=>{
    console.log(`This is the status: ${status}`)
}
const userStatus = showStatus(someStatus as Status);
console.log(userStatus);

// Null-Assertion

interface Confiq {
    port?:number;
}

const confiq:Confiq={
    port:3000
}

const PORT:number=confiq.port as number;
const currentPort:number=confiq.port!;

console.log(PORT);
console.log(currentPort);


//constant assertion

const confiquration ={
    port:3000,
    prefix:'/api/v3'
} as const;

// confiquration.port=4999;