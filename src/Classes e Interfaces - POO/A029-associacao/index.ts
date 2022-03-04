export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private readonly _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  public escrever(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem ferramenta.');
    } else {
      this._ferramenta.escrever();
    }
  }
}

export abstract class Ferramenta {
  constructor(private readonly _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}
