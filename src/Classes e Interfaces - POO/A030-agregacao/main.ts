import { Produto, CarrinhoDeCompras } from './index';

const produto1 = new Produto('Camiseta', 49.5);
const produto2 = new Produto('Caneta', 2);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProduto(produto1, produto2);

const qtd = carrinho.quantidadeDeProdutos();
const valor = carrinho.valorTotal();

console.log(valor);
