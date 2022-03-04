export class Pessoa {
  constructor(
    private _nome: string,
    private readonly sobrenome: string,
    private readonly idade: number,
    private readonly cpf: string,
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }
}

const pessoa = new Pessoa('Carlos', 'Trindade', 18, '123.456.789-10');

console.log(pessoa.nome);
