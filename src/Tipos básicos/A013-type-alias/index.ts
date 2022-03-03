type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK; // Union Types

const pessoa: Pessoa = {
  nome: 'Carlos',
  idade: 18,
  salario: 40_000,
};

function setCorPreferida(pessoa: Pessoa, corPreferida: CorPreferida) {
  return { ...pessoa, corPreferida };
}

console.log(setCorPreferida(pessoa, 'Azul'));

export default pessoa;
