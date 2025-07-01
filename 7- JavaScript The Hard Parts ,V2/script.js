//  Mutating the object (affects original)
// const obj1 = { value: 10 };
// const obj2 = obj1; // `obj2` points to the same object
// obj2.value = 20;   // Mutates the shared object
// console.log(obj1.value); // 20 (changed)
// console.log(obj2.value); // 20 (changed)

//  Reassigning the reference (does NOT affect original)
// let arr1 = [1, 2];
// let arr2 = arr1;    // `arr2` points to the same array
// arr2 = [99, 100];   // Reassigns `arr2` to a new array
// console.log(arr1);   // [1, 2] (unchanged)

// const array = [1, , 3, 4, 5];
// array.forEach(element => {
//     console.log(element);
// });

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// const karim = {
//     name: "Karim",
//     birthDate: 1995,
//     location: "Alexandria",
//     age: function (currentYear) {
//         return currentYear - 1995;
//     }
// }

// console.log(karim.hasOwnProperty("name"), karim.hasOwnProperty("location"), karim.hasOwnProperty("age"), karim.hasOwnProperty("so so"));
// console.log(typeof karim.toString);

// Challenge 7
// Construct a function intersection that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!
// function intersection(arrays) {
//     if (arrays.length <= 1)
//         return arrays[0];

//     const newArray = [];
//     arrays[1].forEach(arrayElement => {
//         // console.log(arrayElment);
//         // console.log("Counter");
//         if (arrays[0].includes(arrayElement))
//             newArray.push(arrayElement);
//     });

//     arrays.shift();
//     arrays.shift();
//     // console.log("arrays after pop(): ", arrays);
//     // console.log("newArray Before The rest of arrays: ", newArray);
//     if (arrays.length > 0) {
//         arrays.forEach(arrayElement => {
//             if (newArray.length === 0)
//                 return

//             // console.log("Each Arrays Remaining Element", arrayElement);
//             // console.log("newArray: ", newArray);
//             newArray.forEach(element => {
//                 // console.log("Each newArray Element: ", element);
//                 // console.log("Actual Comparision", arrayElement.includes(element));
//                 if (!arrayElement.includes(element)) {
//                     // used splice to update the array after we remove the element
//                     const index = newArray.indexOf(element);
//                     newArray.splice(index, 1);
//                 }
//             });
//             // console.log("-------------------------------------------------");
//         });
//     }
//     return newArray;
// }
// output should be[1,2,3,4,5,6]
// console.log(intersection([
//     [1, 2, 3, 4, 5, 6]
// ]));
// output should be[2, 3]
// console.log(intersection([
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3],
//     [2, 3, 4, 5]
// ]));
// output should be[1, 2]
// console.log("End Array: ", intersection([
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3,],
//     [1, 2]
// ]));
// console.log("End Array: ", intersection([
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3,],
//     [1, 2],
//     [2, 3, 4,]
// ]));

// const products = [
//     { name: 'Apple', price: 1.99, inStock: true },
//     { name: 'Banana', price: 0.99, inStock: false },
//     { name: 'Orange', price: 1.49, inStock: true }
// ];
// const result = products
//     .filter(p => p.inStock)
//     .map(p => ({
//         name: p.name,
//         price: p.price * 0.9
//     }))
//     .reduce((acc, p) => acc + p.price, 0);
// console.log(result);

// Challenge 8
// Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!
// function union(arrays) {
//     const result = arrays.reduce(function (acc, singleArray) {
//         singleArray.forEach(element => {
//             if (!acc.includes(element))
//                 acc.push(element);
//         });
//         return acc;
//     }, []);
//     return result;
// }

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// console.log(union([[1, 2, 3], [2, 3, 4], [3, 4, 5, 6], [7, 9, 10, 15, 40]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
// function objOfMatches(array1, array2, callback) {
//     let counter = 0;
//     let counterResult = 0
//     const result = [];
//     for (const element of array1) {
//         if (callback(element) === array2[counter]) {
//             result[counterResult] = {
//                 [element]: array2[counter]
//             }
//             counterResult++;
//         }
//         counter++;
//     }
//     return result;
// }

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'],
//     function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//thiis keyword does not work directly form arrow fucntions but it can inheirted from the outer scope say we put arrowFunction inside the regualrFunction,
//and if you wondering why this doesn't work because the outer scope itself is obj which this refers to the obj object itself which mean you can look at it
// as this and the arrowFunction are on the same level
// const obj = {
//     name: 'My Object',
//     regularFunction: function () {
//         console.log(this.name); // 'My Object' (has its own this)
//     },
//     arrowFunction: () => {
//         console.log(this.name); // undefined (lexical this from outer scope)
//     }
// };

// obj.regularFunction();
// obj.arrowFunction();

// understand closure
// function outer() {
//     let counter = 0;
//     function incrementCounter() {
//         counter++;
//         console.log(counter);
//     }
//     return incrementCounter;
// }
// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();
// here the another function initialize the outer funtion which create new memeory which why it is started from the start
// const anotherFunction = outer();
// anotherFunction();
// anotherFunction();

// Challenge 1
// Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".When you think you completed createFunction, un - comment out those lines in the code and run it to see if it works.
// function createFunction() {
//     return () => console.log("Hello World!");
// }
// const function1 = createFunction();
// function1();

// Challenge 2
// Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
// function createFunctionPrinter(input) {
//     return () => console.log(input);
// }
// const printSample = createFunctionPrinter('sample');
// printSample(); //=> should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// Challenge 3
// Examine the code for the outer function.Notice that we are returning a function and that function is using variables that are outside of its scope.
// Uncomment those lines of code.Try to deduce the output before executing.Now we are going to create a function addByX that returns a function that will add an input by x.
// function outer() {
//     let counter = 0; // this variable is outside incrementCounter's scope
//     function incrementCounter() {
//         counter++;
//         console.log('Counter: ', counter);
//     }
//     return incrementCounter;
// }
// const willCounter = outer();
// const jasCounter = outer();
// Before your do, guess what will be logged from each function call.
// willCounter();
// willCounter();
// willCounter();
// jasCounter();
// willCounter();


// function addByX(x) {
//     return (y) => {
//         const sum = x + y;
//         console.log(sum);
//     };
// }
// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9

// Challenge 4
// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
// function addByTwo(x) {
// return x + 2;
// }
//
// function once(func) {
// let number = 0;
// if (number === 0)
// return (x) => {
// if (number === 0) {
// number = func(x);
// return number;
// }
// else
// return number;
// };
// }
// const onceFunc = once(addByTwo);
// /*** Uncomment these to check your work! ***/
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// Challenge 5
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
// function after(count, func) {
//     return () => {
//         count--;
//         if (count === 0)
//             return func();
//         else
//             return "";
//     };
// }
// /*** Uncomment these to check your work! ***/
// const called = function () { console.log('hello') };
// const afterCalled = after(4, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed
// afterCalled(); // => 'hello' is printed

// Challenge 6
// Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter.Any additional arguments after wait are provided to func when it is invoked.HINT: research setTimeout();
// const printArray = (array) => array.forEach(element => {
//     console.log(element);
// });
// function delay(func, wait, array) {
//     setTimeout(() => func(array), wait);
// }
// delay(printArray, 3000, [1, 2, 3, 4, 5, 6, 7]);

// ASYNC
// Challenge 1
// Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?
// function sayHowdy() {
//     console.log('Howdy');
// }
// function testMe() {
//     setTimeout(sayHowdy, 0);
//     console.log('Partnah');
// }
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

// Challenge 2
// Create a function delayedGreet that console logs welcome after 3 seconds.
// function delayedGreet() {
//     setTimeout(() => console.log("Welcome"), 3000);
// }
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome

// Challenge 3
// Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
// function helloGoodbye() {
//     console.log("Hello");
//     setTimeout(() => console.log("GoodBye"), 2000);
// }
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

// Challenge 4
// Create a function brokenRecord that console logs hi again every second.Use the End Code button to stop the console logs when you are satisfied that it is workin
// function brokenRecord() {
//     setInterval(() => console.log("Hello Again"), 1000);
// }
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again

// Challenge 5
// Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds.Research how to use clearInterval if you are not sure how to do this.
// function limitedRepeat() {
// intervalId = setInterval(() => console.log("Hello Again"), 1000);
// setTimeout(() => clearInterval(intervalId), 6000);
// }
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

// Challenge 6
// Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.
// everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.
// Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
// What do you expect to happen ?
// function everyXsecsForYsecs(func, interval, duration) {
//     const intervalId = setInterval(func, interval * 1000);
//     setTimeout(() => clearInterval(intervalId), duration * 1000);
// }
// Uncomment the following lines to check your work!
// function theEnd() {
//     console.log('This is the end!');
// }
// function sayHi() {
//     console.log('Hey!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
// everyXsecsForYsecs(sayHi, 1000, 5000);

// Challenge 7
// Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.
// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

// function delayCounter(target, wait) {
//     let counter = 1;
//     return () => {
//         const id = setInterval(() => {
//             if (counter <= target) {
//                 console.log(counter);
//                 counter++;
//             }
//             else
//                 clearInterval(id);
//         }, wait);
//     };
// }
// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

// Challenge 8
// Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.
// Hint: take a look at the Promise object docs on MDN.

// function promised(val) {
//     return new Promise0((resolve) => {
//         setTimeout(() => {
//             resolve(val);
//         }, 2000);
//     });
// }
// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

//Object Oriented Programming
//
function userCreator(name, score) {
    this.name = name;
    this.score = score;
};
userCreator.prototype.increment = function () {
    this.score++;
}
userCreator.prototype.login = function () {
    console.log("Loged");
}

const user1 = new userCreator("Will", 3);
console.log(user1);
user1.increment();
console.log(Object.getPrototypeOf(userCreator));
console.log(Function.prototype);
console.log(Object.getPrototypeOf(user1));

const num = "Hello";
console.log(isNaN(num));
console.log(Number.isNaN(num));
console.log(typeof -0);