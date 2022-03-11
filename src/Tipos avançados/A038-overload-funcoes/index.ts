type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: Array<number>): number;
};

const add: Adder = (x: number, y?: number, ...args: Array<number>) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(add(1, 2, 3));
