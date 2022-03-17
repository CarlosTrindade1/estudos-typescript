interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

export class Pessoa implements PessoaProtocolo<string, number> {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    public readonly idade: number,
  ) {}

  public falaNomeCompleto(): void {
    console.log(`Nome: ${this.nome} ${this.sobrenome}.`);
  }

  public falaIdade(): void {
    console.log('Idade: ' + this.idade + ' anos.');
  }
}

const pessoa = new Pessoa('Carlos', 'Trindade', 18);

pessoa.falaNomeCompleto();
pessoa.falaIdade();
