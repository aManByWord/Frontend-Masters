console.log("Hello, In Deep Foundtions");
// // Types
// // TODO: define polyfill for `Object.is(..)`
// // ## Instructions
// // 1. `Object.is(..)` should take two parameters.
// // 2. It should return `true` if the passed in parameters are exactly the same value(not just`===` -- see below!), or`false` otherwise.
// // 3. For `NaN` testing, you can use`Number.isNaN(..)`, but first see if you can find a way to test without usage of any utility ?
// // 4. For `-0` testing, no built -in utility exists, but here's a hint: `-Infinity`.
// // 5. If the parameters are any other values, just test them for strict equality.
// // 6. You cannot use the built -in `Object.is(..)` -- that's cheating!

// if (!Object.is || true) {
//     Object.is = function ObjectIs(firstValue, secondValue) {
//         if (firstValue === 0 && secondValue === 0) {
//             if (-Infinity / firstValue === -Infinity && -Infinity / secondValue === -Infinity)
//                 return true;
//             else if (-Infinity / firstValue === Infinity && -Infinity / secondValue === Infinity)
//                 return true;
//             else
//                 return false;
//         }
//         else if ((typeof firstValue === "number" || typeof secondValue === "number")) {
//             if (isNaN(secondValue) && isNaN(firstValue))
//                 return true;
//             else if (isNaN(secondValue) || isNaN(firstValue))
//                 return false;
//             else
//                 return firstValue === secondValue;
//         }
//         else
//             return firstValue === secondValue
//     };
// }
// // tests:
// // Object.is(-0, 0);
// // console.log(Object.is(42, 42) === true);
// // console.log(Object.is("foo", "foo") === true);
// // console.log(Object.is(false, false) === true);
// // console.log(Object.is(null, null) === true);
// // console.log(Object.is(undefined, undefined) === true);
// // console.log(Object.is(NaN, NaN) === true);
// // console.log(Object.is(-0, -0) === true);
// // console.log(Object.is(0, 0) === true);
// // console.log(Object.is(-0, 0) === false);
// // console.log(Object.is(0, -0) === false);
// // console.log(Object.is(0, NaN) === false);
// // console.log(Object.is(NaN, 0) === false);
// // console.log(Object.is(42, "42") === false);
// // console.log(Object.is("42", 42) === false);
// // console.log(Object.is("foo", "bar") === false);
// // console.log(Object.is(false, true) === false);
// // console.log(Object.is(null, undefined) === false);
// // console.log(Object.is(undefined, null) === false);

// // coercion
// // ## Instructions
// // 1. Define an `isValidName(..)` validator that takes one parameter, `name`. The validator returns `true` if all the following match the parameter (`false` otherwise):

// // 	- must be a string
// // 	- must be non-empty
// // 	- must contain non-whitespace of at least 3 characters

// // 2. Define an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`. The validator returns `true` if all the following match the two parameters (`false` otherwise):

// // 	- either parameter may only be a string or number
// // 	- both parameters should be treated as numbers
// // 	- both numbers must be 0 or higher
// // 	- both numbers must be whole numbers
// // 	- `attended` must be less than or equal to `length`
// // TODO: write the validation functions
// function isValidName(name) {
//     if (typeof name === "string" && name.length >= 3) {
//         if (Number(name) !== 0)
//             return true;
//         else
//             return false;
//     }
//     else
//         return false;
// }

// function hoursAttended(attended, length) {
//     if ((typeof attended === "string" || typeof length === "string") || (typeof attended === "number" || typeof length === "number")) {
//         if (attended.length === 0 || length.length === 0)
//             return false;
//         attended = Number(attended);
//         length = Number(length);
//         if (attended > Math.floor(attended) || length > Math.floor(length))
//             return false
//         else if (attended > length || Number.isNaN(attended) || Number.isNaN(length))
//             return false;
//         else
//             return true;
//     }
//     else
//         return false;
// }

// // tests:
// console.log(isValidName("Frank") === true);
// console.log(hoursAttended(6, 10) === true);
// console.log(hoursAttended(6, "10") === true);
// console.log(hoursAttended("6", 10) === true);
// console.log(hoursAttended("6", "10") === true);
// console.log("");

// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);
// console.log(hoursAttended("", 6) === false);
// console.log(hoursAttended(6, "") === false);
// console.log(hoursAttended("", "") === false);
// console.log(hoursAttended("foo", 6) === false);
// console.log(hoursAttended(6, "foo") === false);
// console.log(hoursAttended("foo", "bar") === false);
// console.log(hoursAttended(null, null) === false);
// console.log(hoursAttended(null, undefined) === false);
// console.log(hoursAttended(undefined, null) === false);
// console.log(hoursAttended(undefined, undefined) === false);
// console.log(hoursAttended(false, false) === false);
// console.log(hoursAttended(false, true) === false);
// console.log(hoursAttended(true, false) === false);
// console.log(hoursAttended(true, true) === false);
// console.log(hoursAttended(10, 6) === false);
// console.log(hoursAttended(10, "6") === false);
// console.log(hoursAttended("10", 6) === false);
// console.log(hoursAttended("10", "6") === false);
// console.log(hoursAttended(6, 10.1) === false);
// console.log(hoursAttended(6.1, 10) === false);
// console.log(hoursAttended(6, "10.1") === false);
// console.log(hoursAttended("6.1", 10) === false);
// console.log(hoursAttended("6.1", "10.1") === false);

// # Wrangling Equality
// ## Instructions

// 1. The `findAll(..)` function takes a value and an array. It returns an array.
// 2. The coercive matching that is allowed:

//  - exact matches (`Object.is(..)`)
//  - strings (except "" or whitespace-only) can match numbers
//  - numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
//  - `null` can match `undefined`, and vice versa
//  - booleans can only match booleans //////////////////
//  - objects only match the exact same object //////////////////

// TODO: write `findAll(..)`
// This Solution is Viable because i know the each memeber of values but if i didn't i would have used either a for loop or added one more codition where i check if the value which exits is the same as searchValue and handles all of the shit in between, and in the end i would push the element in the array not the searchValue
function findAll(searchValue, values) {
    const result = [];
    if (values.includes(searchValue)) {
        if (typeof searchValue == "number") {
            if (Object.is(searchValue, NaN) || Object.is(searchValue, -0))
                result.push(searchValue);
            else if (Object.is(searchValue, 0)) {
                result.push(searchValue);
                result.push("0");
            }
            else if (Object.is(searchValue, Infinity) || Object.is(searchValue, -Infinity))
                result.push(searchValue);
            else {
                if (values.includes(searchValue.toString())) {
                    result.push(searchValue);
                    result.push(searchValue.toString());
                }
                else
                    result.push(searchValue);
            }
        } else if (typeof searchValue == "string") {
            searchValue = searchValue.trim();
            result.push(searchValue);
            if (searchValue.length > 0 && !Object.is(Number(searchValue), NaN) && values.includes(Number(searchValue)))
                result.push(Number(searchValue));
        } else if (searchValue == null)
            result.push(null, undefined);
        else
            result.push(searchValue);
    }
    return result;
}

// tests:
var myObj = { a: 2 };
var values = [
    null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
    "", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
        for (let v of arr1)
            if (!arr2.includes(v)) return false;
        return true;
    }
    return false;
}
