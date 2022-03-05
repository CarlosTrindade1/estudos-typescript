// Declaration mergin

export interface Pessoa {
  readonly nome: string;
}

export interface Pessoa {
  readonly sobrenome: string;
}

export interface Pessoa {
  readonly enderecos: Array<string>;
}

export interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Carlos',
  sobrenome: 'Trindade',
  enderecos: ['Av. Brasil'],
  idade: 18,
};
