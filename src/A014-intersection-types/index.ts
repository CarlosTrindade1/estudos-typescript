// Union Type -> | "OU"
// Intersection Type -> & "E"
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  nome: 'Carlos',
  sobrenome: 'Trindade',
  idade: 18,
};

export { pessoa };
