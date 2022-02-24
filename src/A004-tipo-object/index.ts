const objetoA: Record<string, unknown> = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

const objetoB: {
  chaveA: string;
  chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'asddas';
objetoA.chaveB = 'mvmzxncm';
objetoA.chaveC = 'sasgdyas';

objetoB.chaveA = 'asddas';
objetoB.chaveB = 'mvmzxncm';
objetoB.chaveC = 'sasgdyas';
