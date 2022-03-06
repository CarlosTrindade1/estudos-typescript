type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCores(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCores('vermelho', coresObj));
console.log(traduzirCores('roxo', coresObj));
