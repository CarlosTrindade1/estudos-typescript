function semRetorno(...args: Array<string>): void {
  console.log(args.join(' '));
}

semRetorno('Carlos', 'Trindade');

const pessoa = {
  nome: 'Carlos',
  sobrenome: 'Trindade',

  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.showName();

export default semRetorno;
