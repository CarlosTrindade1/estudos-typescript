type Pessoa = {
  nome: string;
  sobrenome: string;
  idade: number;
};

const pessoas: Array<Pessoa> = [];

pessoas.push({
  nome: 'Carlos',
  sobrenome: 'Trindade',
  idade: 18,
});

pessoas.forEach((pessoa) => console.log(pessoa));
