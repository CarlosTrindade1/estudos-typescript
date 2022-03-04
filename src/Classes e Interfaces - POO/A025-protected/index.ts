export class Empresa {
  protected readonly colaboradores: Array<Colaborador> = [];

  constructor(public readonly nome: string, private readonly cnpj: string) {}

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();

    if (colaborador) return colaborador;

    return null;
  }
}

const udemy = new Udemy();

const colaborador1 = new Colaborador('Carlos', 'Trindade');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');

udemy.addColaborador(colaborador1);
udemy.addColaborador(colaborador2);
udemy.addColaborador(colaborador3);

console.log(udemy);

const colaborador = udemy.popColaborador();

console.log(udemy);
console.log(colaborador);
