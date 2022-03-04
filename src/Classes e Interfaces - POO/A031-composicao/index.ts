export class Carro {
  private readonly motor = new Motor();

  public ligar(): void {
    this.motor.ligar();
  }

  public acelerar(): void {
    this.motor.acelerar();
  }

  public parar(): void {
    this.motor.parar();
  }

  public desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  public ligar(): void {
    console.log('Carro está ligado.');
  }

  public acelerar(): void {
    console.log('Carro está acelerando...');
  }

  public parar(): void {
    console.log('Carro está parando...');
  }

  public desligar(): void {
    console.log('Carro está desligado.');
  }
}
