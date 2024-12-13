const dc = ["superman","flash","batman"];
const marvel = ["thor","Ironman","spiderman"]
// marvel.push(dc)

// console.log(marvel[3][1]);

// const allhero = marvel.concat(dc)
// console.log(allhero);

//  const newhero = [...marvel,...dc]//give spread values,can add various arrays whereas concat can only add two.
// console.log(newhero[1]);

// const anparray = [1,[5,[4,[52,6]]]];

// const realarr =  anparray.flat(2);
// console.log(realarr);

console.log(Array.isArray("Nisha"));
console.log(Array.from("Nisha").length);
console.log(Array.from({name: "Nisha"}));//interesting


let score1 = 100;
let score2 = 100;
let score3 = 100;
 
console.log(Array.of(score1,score2,score3));


