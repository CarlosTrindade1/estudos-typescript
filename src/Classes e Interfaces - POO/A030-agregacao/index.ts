export class CarrinhoDeCompras {
  private readonly produtos: Array<Produto> = [];

  public inserirProduto(...produtos: Array<Produto>) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  public quantidadeDeProdutos(): number {
    return this.produtos.length;
  }

  public valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}
