const dadosCliente1: [number, string] = [1, 'Carlos'];
const dadosCliente2: [number, string, string?] = [2, 'Luiz', 'Eduardo'];
const dadosCliente3: [number, string, ...string[]] = [2, 'Luiz', 'Eduardo'];

dadosCliente1[0] = 2;

function soma(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

console.log(soma(2, 2));
