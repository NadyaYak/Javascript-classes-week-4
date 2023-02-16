/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
...How do we assign a value to a variable?
How do we change the value of a variable?
How do we assign an existing variable to a new variable?
Remind me, what are declare, assign, and define?
What is pseudocoding and why should you do it?
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?*/

let  meal = 'pizza';
console.log(meal);
meal = 'fries';
console.log(meal);
/*  String
 Create a variable called firstVariable
Assign it the value of the string "Hello World"
Change the value of this variable to some number
Store the value of firstVariablein a new variable called secondVariable
Change the value of secondVariableto any string.
What is the value of firstVariable?
Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean*/

  let firstVariable = 'Hello World';
  firstVariable = 8;
let secondVariable = 8 
secondVariable = 'playground';
console.log(firstVariable);
let yourName = 'Nadya';
console.log(`Hello, my name is ${yourName}.`);

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
/* The farm
Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit*/
 let animal = 'cow';
if(animal){
console.log("Mooo");
}
  else{
    console.log("Hey!You are not a cow");
    
  }

/*
E. Driver's Ed
Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/
let age = 16;
let myAge = 5;
if(myAge >age){
  console.log("Here are the keys!");
}
else{
  console.log("Sorry,you're too young.");
}
/*I. Loops
Remember: USE letwhen you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)*/
for(let i = 0; i <= 10; i++){
  console.log(i, "thisisGood");
} 
for(let i = 10; i<=7; i++) {
  console.log(i,"this is nogood")
};
for(let i= 12; i <= 36; i+=3) {
  console.log(i, "Yeah");
}
for(let i = 1; i <= 100; i++) {
  if(i %  2=== 0) {
    console.log(i,"get even");
  }
}
for(let i = 0; i<=100; i++){
if(i % 3 ===0 && i % 5 === 0 ) {
  console.log(i, "high5")
} else if (i % 5 === 0){
  console.log(i, "highFive")  
} else if(i % 3 ===0){
 console.log(i, "NO5") 
} else {
  console.log(i, "i found a number")
}
//------  
}
let accountBalance = 0;
 for(let i=0; i<=10;i++){
   accountBalance += i 
 }
console.log(`Balance:${accountBalance}`) ;

for(let i =1; i<=100; i++) {
  accountBalance += i
}
console.log(accountBalance*2);
//Arrays
let quotes =[
  'nadya',
  'badya',
  'fadya'
]
//
const randomThings = [1, 10, "Hello", true]
randomThings[0]
randomThings[2] = "World"
console.log(randomThings);
///
ourClass = ["Salty", "Zoom","Sardine", "Slack", "Github"]

ourClass[2]
ourClass[4]
ourClass.push("Cloud City")
console.log(ourClass)

/* Mix it Up*/
const myArray = [5, 10, 500, 20]

myArray.push('Aegon')
myArray.push('strOvMyChoice')
 console.log(myArray)
myArray.shift()
myArray.unshift("Bob Marley")
 console.log(myArray)
myArray.pop()
myArray.reverse()
console.log(myArray)

/* BiggieSmalls
let thisnum = 9
if(thisnum > 100){
    console.log("Big Number")
}else{
  console.log("Little Number")
}
// munkey in the middle
if(thisnum > 10){
    console.log("Big Number")
}else if(thisnum < 5){
  console.log("Little Number")
}else{
  console.log("MojoJoJo")
}
// -----------------------------
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// console.log(`"Kristyn is rocking that ${kristynsCloset[2]} in Kristyn's closet today!"`)

kristynsCloset.splice(6,0,"Raybans")
kristynsCloset[5] = "Stained Knit Hat"
// console.log(kristynsCloset)

// Thom is looking fierce in a grey button-up, jeans and wool scarf!"

let outfit =[thomsCloset[0][0],thomsCloset[1][1],thomsCloset[2][1]]

console.log(`Thom is looking fierce in a ${outfit[0]}, ${outfit[1]} and ${outfit[2]}!`)
thomsCloset[2][1]="Footie Pajamas"

// Functions
const printGreeting = (name) =>{
  console.log(`Hello there ${name}`)
}
  printGreeting(name)

const printCool = (name) =>{
  console.log(`${name} is cool`)
}
  printCool(name)

const calculateCube= (dimensions) => {
  let vol = dimensions ** 3
  
  console.log(`Cube Volume is : ${vol}`)
}
calculateCube(5)

let vowels = ["a","e","i","o","u"]
const isVowel = (char)=>{
  if(vowels.includes(char)){
    console.log("IS a Vowel")
  }else{
   console.log(false)
  }
}
isVowel("p")
isVowel("i")

const getTwoLengths = (x,y) => {
  console.log(x.length,y.length)
}
getTwoLengths("Jordan", "Lea")

const getMultiLengths = (...longs) => {
  longs.forEach((x)=>{
    console.log(x.length)
  })
}

getMultiLengths("apple","banana","nyc")

const maxOfThree = (a,b,c) => {
  let greaterNum ;
  if(a>b){
   console.log(a) 
    greaterNum = a
  }else{
    console.log(b)
      greaterNum = b
  }
  
  if(greaterNum < c){
     console.log("C WINS",c) 
  }else{
    console.log(`${greaterNum} WINS`)
  }
}
maxOfThree(1,43,222)
maxOfThree(1,433,222)
maxOfThree(1221,43,222)

const printLongestWord = (arr) => {
  let biggest = 0
    arr.forEach((word)=>{
      if(word.length > biggest){
        biggest = word.length
        console.log(word, "is Biggest")
      }
    })
}

printLongestWord(["apple","elephant","croissant"])















const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
*/

