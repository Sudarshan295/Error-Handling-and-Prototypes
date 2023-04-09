/*
Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.
*/

function convertToNumber(string){
    try{
        string = Number(string);
    if(isNaN(string)){
      throw new Error("Invalid Number");
    }
    else{
      console.log("valid Number");
    }
    }
    catch(err){
        console.log( "Error Resolved " , err)
    }
}
convertToNumber("123")
convertToNumber("abc")
