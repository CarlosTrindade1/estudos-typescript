import { Caneta, Escritor, MaquinaEscrever } from '.';

const escritor1 = new Escritor('Carlos Trindade');
const escritor2 = new Escritor('Eduardo da Silva');

const caneta = new Caneta('Caneta Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina Bic');

escritor1.ferramenta = caneta;
escritor2.ferramenta = maquinaEscrever;

escritor1.escrever();
escritor2.escrever();
