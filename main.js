//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteDishes(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            if (typeof person[key][0] === 'object' && person[key][0] !== null) {
                console.log(`${key}:`);
                for (let shake of person[key]) {
                    for (let shakeBrand in shake) {
                        console.log(`  ${shakeBrand}: ${shake[shakeBrand]}`);
                    }
                }
            } else {
                console.log(`${key}: ${person[key].join(', ')}`);
            }
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}



displayFavoriteDishes(person3);




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class human{
    constructor(name, age){
        this.name = name,
        this.age = age
    // Use an arrow to create the printInfo method
        this.PrintInfo = () =>{
            console.log(`Name: ${this.name}\n Age: ${this.age}`)
        };

        this.addYear = () =>{
            this.age++;
            console.log(`This persons age has updated to ${this.age} sicne last time you looked`);
        };
        // Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

        this.addAge = (number) =>{
            this.age += number;
            console.log(`${this.name}'s updated age is ${this.age}`);
        }
    }
}


let Lane = new human('Lane',24);
console.log(Lane.PrintInfo())
console.log(Lane.addYear())
console.log(Lane)

let Jameson = new human('Jameson', '33');
console.log(Jameson.addYear())
console.log(Jameson.addYear())
console.log(Jameson.addYear())

console.log(Jameson.addAge(7))









// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
string = "Meshugga"
string2="Whaaattabbooooo"
const LongOrShort = (word) =>{
    return new Promise((resolve, reject)=>{
        if(word.length > 10){
            resolve(true)
            console.log(`${word} is a big word`)
        }else{
            reject(false)
            console.log(`${word} is a short word`)
        }

    }

    )}

LongOrShort(string2)


//CODEWARS QUESTIONS
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    arr.sort((a, b) => b - a);

    const sum = arr.reduce((total, current, index) => {
        if (index < arr.length - 1) {
            return total + (arr[index] - arr[index + 1]);
        }
        return total;
    }, 0);

    return sum;
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function ShortWord (string){
    const words = string.split(' ');
    if(words.length === 0){
        return 0;
    }
    const minLength = Math.min(...words.map(word => word.length));
    return minLength

}
let phrase = "My brain is getting fried by this stuff"

console.log(ShortWord(phrase))