export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public readonly idade: number,
    public readonly cpf: string,
  ) {}

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Carlos', 'Trindade', 18, '123.456.789-10');
const pessoa2 = Pessoa.criaPessoa('Eduardo', 'Silva');

console.log(pessoa1);
console.log(pessoa2);
