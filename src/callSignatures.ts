function add(a: number, b: number) {
  return a + b;
}
// * function call signature
type Add2Type = (a: number, b: number) => number;

const add2: Add2Type = (a, b) => {
  return a + b;
};
