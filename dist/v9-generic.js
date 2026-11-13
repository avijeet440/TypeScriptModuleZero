const identity = (value) => {
    return value;
};
console.log(identity("Avijeet"));
// console.log(identity(30)); ekhane number dukhano jabe na kenona eta holo string type er taile amake arekta function banate hobe.
function identityString(value) {
    return value;
}
function identityNumber(value) {
    return value;
}
console.log(identityString("Ami"));
console.log(identityNumber(123));
// kintu ei somosya somadha korte pare ekmatro generic.
//Generic Function
const identityType = (value) => {
    return value;
};
console.log(identityType("Avi"));
console.log(identityType(100));
console.log(identityType(true));
console.log(identityType({ name: "Avi" }));
//Generic Function er bastob udaharon
function getArray(items) {
    return items;
}
const names = getArray(["Avi", "Raj"]);
const numbers = getArray([10, 20, 30]);
console.log(names);
console.log(numbers);
const myBox = {
    value: "Amar"
};
console.log(myBox);
console.log(myBox.value);
const stringBox = {
    value: "Hello"
};
const numberBox = {
    value: 100
};
const booleanBox = {
    value: true
};
console.log(stringBox);
console.log(numberBox);
console.log(booleanBox);
function sendResponse(data) {
    return {
        success: true,
        data: data
    };
}
console.log(sendResponse({ id: 23, name: "Avijeetkumardas" }));
console.log(sendResponse({ id: 23, price: 200 }));
const userResponse = sendResponse({
    id: 1,
    name: "Avi"
});
const productResponse = sendResponse({
    id: 101,
    price: 500
});
console.log(userResponse);
console.log(productResponse);
export {};
//# sourceMappingURL=v9-generic.js.map