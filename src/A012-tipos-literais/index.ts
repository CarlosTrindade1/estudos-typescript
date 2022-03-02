let x = 10; // eslint-disable-line
x = 120;

const y = 10;

let z: 100 = 100; // eslint-disable-line

const pessoa = {
  nome: 'Carlos' as const, // Tipo literal em um objeto
  sobrenome: 'Trindade',
};

function escolhaUmaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaUmaCor('Azul'));

// Module mode
export default 1;
