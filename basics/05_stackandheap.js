//stack (primitive),heap(non-primitive)


//stack(assign copy to the variables)
let myname = "ishu"

let anothername = myname
console.log(anothername);
anothername = "nisha";
console.log(myname);
console.log(anothername);



//heap(assign reference to the variables)
let userOne = {
    email:"nisha@248.com",
    upi: "fdj@123",


}
userOne.email = "nishu.com"

console.log(userOne);
