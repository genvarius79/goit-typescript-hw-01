function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}
const merged = merge(
  {
    name: "Alisa",
  },
  {
    age: 28,
  }
);

console.log("====================================");
console.log(merged);
console.log("====================================");
