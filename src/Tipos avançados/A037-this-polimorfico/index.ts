export class Calculadora {
  constructor(protected numero: number) {}

  add(numero: number): this {
    this.numero += numero;
    return this;
  }

  sub(numero: number): this {
    this.numero -= numero;
    return this;
  }

  div(numero: number): this {
    this.numero /= numero;
    return this;
  }

  mult(numero: number): this {
    this.numero *= numero;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(numero: number): this {
    this.numero **= numero;
    return this;
  }
}

const calculadora = new SubCalculadora(2);

calculadora.add(8).mult(3).div(3).sub(8).pow(2);

console.log(calculadora);

// Builder - GoF
export class Builder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  public setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  public setUrl(url: string): this {
    this.url = url;
    return this;
  }

  public send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new Builder();

request.setUrl('https://google.com').setMethod('get').send();
