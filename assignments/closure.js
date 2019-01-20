// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayName() 
{
  let greeting = 'Hi';
  function myName() 
  {
    let name = 'John';
  return  greeting + ' ' + name;
  }
  return myName();
}
console.log (sayName());




// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => (++count);
  // Return a function that when invoked increments and returns a counter variable.
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());





/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
