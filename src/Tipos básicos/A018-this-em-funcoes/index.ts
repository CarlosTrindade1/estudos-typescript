export function funcao(this: Date, name: string, age: number) {
  console.log(this);
  console.log(name, age);
}

funcao.call(new Date(), 'Carlos', 18);
