// jshint esversion: 6

// process.on("exit", (code) => {
//   console.log(`About to exit with code: ${code}`);
// });

process.on("exit", (code) => {
  setTimeout(() => {
    console.log("This will not run");
  }, 0);
});
