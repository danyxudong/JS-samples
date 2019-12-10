// jshint esversion: 8

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 3) {
    resolve("Success");
  } else {
    reject("Failed!");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});

const recordVideoOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "Video 3 Recorded");
});

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages) => {console.log(messages);});

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((message) => {console.log(message);});
