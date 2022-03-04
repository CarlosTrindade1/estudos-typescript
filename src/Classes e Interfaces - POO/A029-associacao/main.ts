import { Caneta, Escritor, MaquinaEscrever } from '.';

const escritor = new Escritor('Carlos Trindade');

const caneta = new Caneta('Caneta Bic');
const maquinaEscrever = new MaquinaEscrever('Máquina Bic');

// escritor.ferramenta = caneta;

escritor.escrever();
