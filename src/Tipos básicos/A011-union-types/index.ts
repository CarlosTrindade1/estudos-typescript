function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('10', '20'));

let numberOrString: number | string;

numberOrString = 10;
numberOrString = 'Carlos';

console.log(numberOrString);
