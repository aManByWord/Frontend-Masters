// inner has access to count (lexical scoping)
// We maintain a reference to inner (via the return and assignment to counter)
// Therefore JavaScript must keep count alive

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  // Not returning anything
  return inner;
}

const counter = outer();
for (let i = 0; i < 10; i++) {
  counter();
}