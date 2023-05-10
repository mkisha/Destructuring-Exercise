//Object Destructuring 1
//What does the following code return/print?


console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 8



//Object Destructuring 2
//What does the following code return/print?


console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}





//Object Destructuring 3
//What does the following code return/print?

getUserData({firstName: "Alejandro", favoriteColor: "purple"})
// Your name is Alejandro and you like purple

getUserData({firstName: "Melissa"})
// Your name is Melissa and you like green

getUserData({})
// Your name is undefined and you like green







//Array Destructuring 1
//What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"





//Array Destructuring 2
//What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]





//Array Destructuring 3
//What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]




//ES5 Assigning Variables to Object Properties



 // ES2015 Object Destructuring
/* Write an ES2015 Version */

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers





 // ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */

[1, 2] = [2, 1]








//raceResults()
//Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.


function raceResults([first, second, third, ...rest]) {
    return {
        first, second, third, rest
    }
}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})