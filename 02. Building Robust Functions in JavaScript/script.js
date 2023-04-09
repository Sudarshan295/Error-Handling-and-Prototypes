/*
Create a function called getPerson that takes an object as a parameter representing a person's name and age.
The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
However, if the parameter is not a valid object with the properties "name" and "age", the function should 
throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the 
error message if it occurs.
*/

function getPerson(obj) {
    try {
        if (typeof obj !== "object" || !obj.hasOwnProperty("Name") || !obj.hasOwnProperty("Age")) {
            throw new Error("Invalid parameter type")
        }
        else {
           console.log(`Name : ${obj.Name}, Age : ${obj.Age}`);
        }
    }
    catch (err) {
        console.log(err)
    }
}

const obj = {
    Name: "Mithun",
    Age: 20
}
const arr = ["Mithun", 20];

getPerson(obj);
getPerson(arr);
