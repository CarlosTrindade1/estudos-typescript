type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['Vacina 1, Vacina 2'],
};

const animal2 = {
  nome: 'pluto',
  vacinas: ['Vacina 1, Vacina 2'],
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');
const nome = obterChave(animal2, 'nome');

console.log(vacinas);
console.log(cor);
console.log(nome);
