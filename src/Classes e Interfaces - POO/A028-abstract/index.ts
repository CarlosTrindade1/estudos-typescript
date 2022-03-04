export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  public atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  private perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} - ${this.nome} agora tem ${this.vida} de vida.`);
  }

  protected abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  protected bordao(): void {
    console.log(`${this.emoji} THE NORTH REMEMBERS!'`);
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  protected bordao(): void {
    console.log(`${this.emoji} UEEEEERGH!`);
  }
}

const guerreira = new Guerreira('Bryenne de Tarth', 98, 1000);
const monstro = new Monstro('Montanha', 95, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
