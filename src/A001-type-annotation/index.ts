/* eslint-disable */
let nome: string = 'Carlos';
export default nome;

// arrays
let arrayDeNumbers: Array<number> = [1, 2 , 3];
let arrayDeString: Array<string> = ['1', '2', '3'];

// objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 18,
  nome: 'Carlos',
  adulto: true
}

// function
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
