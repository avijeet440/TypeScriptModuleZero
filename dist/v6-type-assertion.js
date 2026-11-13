//Type Assertion
console.log("TYPE ASSERTION FILE RUNNING");
let currentUser = {
    name: "Rahim"
};
const user = currentUser;
console.log(user.name);
const someStatus = "Approved";
const showStatus = (status) => {
    console.log(`This is the status: ${status}`);
};
const userStatus = showStatus(someStatus);
console.log(userStatus);
const confiq = {
    port: 3000
};
const PORT = confiq.port;
const currentPort = confiq.port;
console.log(PORT);
console.log(currentPort);
//constant assertion
const confiquration = {
    port: 3000,
    prefix: '/api/v3'
};
export {};
// confiquration.port=4999;
//# sourceMappingURL=v6-type-assertion.js.map