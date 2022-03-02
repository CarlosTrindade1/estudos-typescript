type MapStringsCallback = (item: string) => string;

export function mapStrings(
  array: Array<string>,
  callbackfn: MapStringsCallback,
) {
  const newArray: Array<string> = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const ABC = mapStrings(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(ABC);
