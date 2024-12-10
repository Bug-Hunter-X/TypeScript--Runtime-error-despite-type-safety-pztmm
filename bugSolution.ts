function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b;
}

function addSafe(a: any, b: any): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return String(a) + String(b);
  }
}

let result = addSafe("hello", "world");
console.log(result); //Output: "helloworld"

let result2 = addSafe(5, 10);
console.log(result2);  // Output: 15

//Using a type guard
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addWithGuard(a: any, b: any): number {
    if (!isNumber(a) || !isNumber(b)){
        throw new Error('Parameters must be numbers')
    }
    return a + b;
}
let result3 = addWithGuard(10, 20); // Returns 30
let result4 = addWithGuard("10", 20); //Throws error because of the string type