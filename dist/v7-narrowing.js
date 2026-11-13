// typeof
let x = ["ABC"];
console.log(typeof x === "object");
let y = ["Avijeet"];
console.log(typeof y === 'object');
//Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "Avi",
    address: {
        street: "MN"
    }
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user.address.street);
        return;
    }
    throw new Error("User not found");
};
export {};
//# sourceMappingURL=v7-narrowing.js.map