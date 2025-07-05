console.log("Hello, In Deep Foundtions");

//# Function Expressions

// In this exercise, you will be writing some functions and function expressions, to manage the student enrollment records for a workshop.

// **Note:** The spirit of this exercise is to use functions wherever possible and appropriate, so consider usage of array utilities `map(..)`, `filter(..)`, `find(..)`, `sort(..)`, and `forEach(..)`.

// ## Instructions (Part 1)

// **Note:** In Part 1, use only function declarations or named function expressions.

// You are provided three functions stubs -- `printRecords(..)`, `paidStudentsToEnroll()`, and `remindUnpaid(..)` -- which you must define.

// At the bottom of the file you will see these functions called, and a code comment indicating what the console output should be.

// 1. `printRecords(..)` should:
// 	- take a list of student Ids
// 	- retrieve each student record by its student Id (hint: array `find(..)`)
// 	- sort by student name, ascending (hint: array `sort(..)`)
// 	- print each record to the console, including `name`, `id`, and `"Paid"` or `"Not Paid"` based on their paid status

// 2. `paidStudentsToEnroll()` should:
// 	- look through all the student records, checking to see which ones are paid but **not yet enrolled**
// 	- collect these student Ids
// 	- return a new array including the previously enrolled student Ids as well as the to-be-enrolled student Ids (hint: spread `...`)

// 3. `remindUnpaid(..)` should:
// 	- take a list of student Ids
// 	- filter this list of student Ids to only those whose records are in unpaid status
// 	- pass the filtered list to `printRecords(..)` to print the unpaid reminders
// don't use for loop when you can functions like map and reduce

// Normal
// function printRecords(recordIds) {
//     const printedArray = []
//     studentRecords.filter(function getRecords(record) {
//         if (recordIds.includes(record))
//             printedArray.push(record);
//         else {
//             if (recordIds.includes(record.id))
//                 printedArray.push(record);
//         }
//     });

//     printedArray.sort(function getRecordsSort(record1, record2) {
//         return record1.name.localeCompare(record2.name);
//     });

//     printedArray.filter(function print(student) {
//         if (student.paid)
//             console.log(`${student.name} (${student.id}) paid`);
//         else
//             console.log(`${student.name} (${student.id}) not paid`);
//     });
// }

// Arrow
// function printRecords(recordIds) {
//     const printedArray = []
//     studentRecords.filter((record) => {
//         if (recordIds.includes(record))
//             printedArray.push(record);
//         else {
//             if (recordIds.includes(record.id))
//                 printedArray.push(record);
//         }
//     });

// printedArray.sort((record1, record2) => record1.name.localeCompare(record2.name));

// printedArray.filter((student) => {
//     if (student.paid)
//         console.log(`${student.name} (${student.id}) paid`);
//     else
//         console.log(`${student.name} (${student.id}) not paid`);
// });

// }

// function paidStudentsToEnroll() {
//     const paidStudents = [];
//     studentRecords.filter((student) => {
//         if (currentEnrollment.includes(student.id) || student.paid == true)
//             paidStudents.push(student);
//     });
//     return paidStudents;
// }

// function remindUnpaid(recordIds) {
//     const notPaidStudents = [];
//     recordIds.filter((student) => {
//         if (student.paid == false)
//             notPaidStudents.push(student);
//     });
//     printRecords(notPaidStudents);
// }


// ********************************

// var currentEnrollment = [410, 105, 664, 375];
// var studentRecords = [
//     { id: 313, name: "Frank", paid: true, },
//     { id: 410, name: "Suzy", paid: true, },
//     { id: 709, name: "Brian", paid: false, },
//     { id: 105, name: "Henry", paid: false, },
//     { id: 502, name: "Mary", paid: true, },
//     { id: 664, name: "Bob", paid: false, },
//     { id: 250, name: "Peter", paid: true, },
//     { id: 375, name: "Sarah", paid: true, },
//     { id: 867, name: "Greg", paid: false, },
// ];

// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);
// console.log("----");
// bar(); // TypeError (var bar is hoisted as undefined)
// var bar = function () {
//     console.log("World");
// };

/*
    Bob (664): Not Paid
    Henry (105): Not Paid
    Sarah (375): Paid
    Suzy (410): Paid
    ----
    Bob (664): Not Paid
    Frank (313): Paid
    Henry (105): Not Paid
    Mary (502): Paid
    Peter (250): Paid
    Sarah (375): Paid
    Suzy (410): Paid
    ----
    Bob (664): Not Paid
    Henry (105): Not Paid
*/

/*
Hoisting
In this exercise, you will refactor some code that manages student enrollment records for a workshop, to take advantage of function hoisting.

## Instructions
Refactor all inline function expressions to be function declarations. Place function declarations at the bottom (that is, below any executable code) of their respective scopes.

Also, pull function declarations to outer scopes if they don't need to be nested.
*/
// var teacher = "Karim";
// {
//     console.log(teacher);
//     let teacher = "Kyle";
// }
// bar(); // TypeError (var bar is hoisted as undefined)
// var bar = function () {
//     console.log("World");
// };


/*
Modules Scope
In this exercise, you will refactor some code that manages student enrollment records for a workshop, to use the module pattern.

## Instructions
1. Wrap all of the functions in a module factory (ie, function named `defineWorkshop()`). This function should make a return a public API object.

2. The returned public API object should include the following methods:

    - `addStudent(id,name,paid)`
    - `enrollStudent(id)`
    - `printCurrentEnrollment()`
    - `enrollPaidStudents()`
    - `remindUnpaidStudents()`,

3. Move the `currentEnrollment` and `studentRecords` arrays inside the module definition, but as empty arrays.

4. Create an instance of this module by calling `defineWorkshop()`, and name it `deepJS`.

5. Define all the student records by calling `deepJS.addStudent(..)` for each.

6. Define the student enrollments by calling `deepJS.enrollStudent(..)` for each.

7. Change the execution code (the console output steps) to references to `deepJS.*` public API methods.
*/

function defineWorkshop() {
    var API_PUBLIC = { addStudent, enrollStudent, printCurrentEnrollment, enrollPaidStudents, remindUnpaidStudents, };
    var currentEnrollment = [];
    var studentRecords = [];
    return API_PUBLIC;

    function addStudent(id, name, paid) {
        studentRecords.push({ id: id, name: name, paid: paid });
    }
    function enrollStudent(id) {
        if (!currentEnrollment.includes(id))
            currentEnrollment.push(id);
    }
    function printCurrentEnrollment() {
        printRecords(currentEnrollment);
    }

    function printRecords(recordIds) {
        const printedArray = []
        studentRecords.filter(getRecords);
        printedArray.sort(getRecordsSort);
        printedArray.filter(print);

        function getRecords(record) {
            if (recordIds.includes(record))
                printedArray.push(record);
            else {
                if (recordIds.includes(record.id))
                    printedArray.push(record);
            }
        }
    }
    /*********************/
    function getRecordsSort(record1, record2) {
        return record1.name.localeCompare(record2.name)
    }
    function print(student) {
        if (student.paid)
            console.log(`${student.name} (${student.id}) paid`);
        else
            console.log(`${student.name} (${student.id}) not paid`);
    }
    /*********************/

    function enrollPaidStudents() {
        const paidStudents = [];
        studentRecords.filter(toEnroll);
        currentEnrollment = paidStudents;
        printCurrentEnrollment();

        /*********************/
        function toEnroll(student) {
            if (currentEnrollment.includes(student.id) || student.paid == true)
                paidStudents.push(student);
        }
    }

    function remindUnpaidStudents() {
        const notPaidStudents = [];
        studentRecords.filter(getNotPaidStudents);
        printRecords(notPaidStudents);

        /*********************/
        function getNotPaidStudents(student) {
            if (student.paid == false && currentEnrollment.includes(student))
                notPaidStudents.push(student);
        }
    }
}

var deepJS = defineWorkshop();
var currentEnrollment = [410, 105, 664, 375];
var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];
studentRecords.forEach(record => {
    deepJS.addStudent(record.id, record.name, record.paid);
});
currentEnrollment.forEach(id => {
    deepJS.enrollStudent(id);
})
deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();
console.log("----");
