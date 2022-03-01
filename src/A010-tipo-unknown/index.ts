let x: unknown; // -> 'unknown' é um 'any' mais "seguro".

x = 10;
x = 'Luiz';
x = 900;
x = 10;

const y = 800;

if (typeof x === 'number') console.log(x + y);
