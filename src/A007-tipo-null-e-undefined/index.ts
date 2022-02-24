export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

const carlos = createPerson('Carlos', 'Trindade');

console.log(carlos.firstName);
console.log(carlos.lastName);

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);

console.log(squareOfTwoNumber);
