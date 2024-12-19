//const tinderuser = new Object();

const tinderUser = {}
tinderUser.id = "abc2";
tinderUser.email = "nisha@google.com";
tinderUser.name = "nisha dwivedi";

//tinderUser.name = tinderUser["name"].toUpperCase();

const regularuser = {
    email: "fkdj@gmail.com",
    fullname:{
        firstname:"nisha",
        lastname:"dwivedi",

    }
}
//console.log(regularuser.fullname.lastname);
const obj1 = {1:"a",2:"c"}
const obj2 = {2:"b",4:"d"}
//const returnedtarget = Object.assign(obj1,obj2);
const obj4 = {5:"e",6:"f"}
const obj3 = Object.assign({},obj1,obj2,obj4);
//console.log(returnedtarget);
const obj = {...obj1,...obj2}
//console.log(obj);

//console.log(returnedtarget === obj1);

//console.log(tinderUser);

// const user =[
//     {name:"nisha"},
//     {id:"abc123"},
//     {email:"nisha@google.com"},
// ]



// console.log(Object.keys(regularuser));
// console.log(Object.values(regularuser));

// console.log(Object.entries(regularuser));

// console.log(tinderUser.hasOwnProperty('name'));


const course = {
    cousename:"nisha",
    price:"4786",
    courseInstructor:"jsdnof"
}

//course.courseInstructor

const {courseInstructor} = course 
console.log(courseInstructor);
