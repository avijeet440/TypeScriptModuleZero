//Some caveat of Type Guard

const printValue=(value:string|string[]|null)=>{
if(value && typeof value==="string"){
  for(let str of value){
    console.log(str)
  }
}else if(typeof value==="string"){
    console.log(value)
}else if(value && typeof value==="object"){
    for (let str of value){
        console.log(str)
    }

}
else{
    console.log("No value")
}
}
console.log(printValue(null))
console.log(printValue("Bangladesh"))
console.log(printValue(["Bangladesh","India", "Pakistan"]))

const printValue1 = (value: string | string[] | null) => {
    if (typeof value === "string") {
        for (const str of value) {
            console.log(str);
        }
    } else if (Array.isArray(value)) {
        for (const str of value) {
            console.log(str);
        }
    } else {
        console.log("No value");
    }
};

printValue1("Avi");
printValue1(["Avi", "Raj"]);
printValue1(null);


// Equality 

const compare =(x:number|string, y:number|boolean)=>{
if(x===y){
    console.log(x,y)
}
}

const printA=(x:string|string[]|null)=>{
    if(x!==null){
        if(typeof x==="object"){
            for (let str of x) {
                console.log(str)
        }
        return
        }
        console.log(x);
return
    }
    console.log("no value")
}
printA("Avijeet kumar")
printA(["Avijeet","Raj"])
printA(null);

//Descriminated Union

interface Circle {
    kind:"circle",
    radius:number
}

interface Square {
    kind:"square",
    sideLenght:number
}


const getAreat=(shape:Circle|Square)=>{
if(shape.kind==="circle"){
    console.log(shape.radius)
}else{
console.log(shape.sideLenght)
}
}

getAreat({kind:"circle", radius:3})
getAreat({kind:"square", sideLenght:30})