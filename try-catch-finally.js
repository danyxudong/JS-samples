// jshint esversion: 6

try {
  nonExistentFunction();
} catch(error) {
  console.log("Failed!");
  // expected output: ReferenceError: nonExistentFunction is not defined.
  // Note - error message will vary depending on browser
}

console.log("entering try-catch statement");

try {
  console.log("entering try block");
  throw "throw message";
  console.log("this message is never seen");
} catch (e) {
  console.log("entering catch block");
  console.log(e);
  console.log("leaving catch block");
} finally {
  console.log("entering and leaving the finally block");
}

console.log("leaving try-catch statement");
