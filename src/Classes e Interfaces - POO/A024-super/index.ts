export class Pessoa {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number,
    protected readonly cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public readonly sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  public getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    return super.getNomeCompleto();
  }
}

const aluno = new Aluno('Carlos', 'Trindade', 18, '123.456.789-10', '0001');

const nomeAluno = aluno.getNomeCompleto();

console.log(nomeAluno);

console.log(aluno);
