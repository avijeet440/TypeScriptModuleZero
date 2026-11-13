//Some caveat of Type Guard
const printValue = (value) => {
    if (value && typeof value === "string") {
        for (let str of value) {
            console.log(str);
        }
    }
    else if (typeof value === "string") {
        console.log(value);
    }
    else if (value && typeof value === "object") {
        for (let str of value) {
            console.log(str);
        }
    }
    else {
        console.log("No value");
    }
};
console.log(printValue(null));
console.log(printValue("Bangladesh"));
console.log(printValue(["Bangladesh", "India", "Pakistan"]));
const printValue1 = (value) => {
    if (typeof value === "string") {
        for (const str of value) {
            console.log(str);
        }
    }
    else if (Array.isArray(value)) {
        for (const str of value) {
            console.log(str);
        }
    }
    else {
        console.log("No value");
    }
};
printValue1("Avi");
printValue1(["Avi", "Raj"]);
printValue1(null);
// Equality 
const compare = (x, y) => {
    if (x === y) {
        console.log(x, y);
    }
};
const printA = (x) => {
    if (x !== null) {
        if (typeof x === "object") {
            for (let str of x) {
                console.log(str);
            }
            return;
        }
        console.log(x);
        return;
    }
    console.log("no value");
};
printA("Avijeet kumar");
printA(["Avijeet", "Raj"]);
printA(null);
const getAreat = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.radius);
    }
    else {
        console.log(shape.sideLenght);
    }
};
getAreat({ kind: "circle", radius: 3 });
getAreat({ kind: "square", sideLenght: 30 });
export {};
//# sourceMappingURL=v8-narrowing-cont.js.map