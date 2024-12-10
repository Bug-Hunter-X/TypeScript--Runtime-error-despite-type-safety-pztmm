# TypeScript Runtime Error Despite Type Safety
This example demonstrates a common pitfall in TypeScript: type safety during compilation doesn't always guarantee runtime correctness.  While TypeScript's type system prevents many errors at compile time, it doesn't catch all possible runtime exceptions, particularly when dealing with type coercion and function arguments.

The `add` function is declared to take two numbers and return their sum. However, in the example, strings are passed as arguments. TypeScript will compile this code without any errors because TypeScript performs only static checks, but the runtime will throw an error because attempting to add strings using the `+` operator concatenates them instead of performing numerical addition.

The solution involves runtime type checking to validate arguments before performing the operation or using a more sophisticated approach like type guards.