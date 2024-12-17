const mysym = Symbol("key1");

const JsUser = {
    name: "nisha",
    age: 18,
    [mysym]: "mykey1",
    location: "Banda",
    email: "dwivedinisha248@gmail.com",
    isloggedin: false,
    lastlogindays: ["monday","saturday"],

}

// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);
// JsUser.email = "nishagoogle.com";
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.greetings = function(){
    console.log(`Hello JS user, ${this.name}`);
};
console.log(JsUser.greetings());

