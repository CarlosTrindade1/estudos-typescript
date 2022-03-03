export function criaErro(): never {
  throw new Error('Erro inesperado');
}

criaErro();
