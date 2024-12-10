function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", "world"); // This will compile but throw an error at runtime
console.log(result);