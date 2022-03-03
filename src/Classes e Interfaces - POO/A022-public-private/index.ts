export class Empresa {
  private readonly colaboradores: Array<Colaborador> = [];

  constructor(public readonly nome: string, protected readonly cnpj: string) {}

  public addColaborador(colaborador: Colaborador) {
    this.colaboradores.push(colaborador);
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Carlos', 'Trindade');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');
empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);
console.log(empresa1);
