export {};

// const echo = (args: number): number => {
//   return args;
// };

// const echo = (args: string): string => {
//   return args;
// };

const echo = <T>(args: T): T => {
  return args;
};

console.log(echo<string>("hello, generics!"));
console.log(echo<number>(123));
