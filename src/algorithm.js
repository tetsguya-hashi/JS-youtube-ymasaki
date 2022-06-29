//昇順ソート
const a = [20, 10, 50, 80, 40, 30];
function bsort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let x = 0; x < len - i; x++) {
      if (array[x] > array[x + 1]) {
        [array[x], array[x + 1]] = [array[x + 1], array[x]];
      }
    }
  }
  return array;
}
console.log(bsort(a));

//降順ソート
const b = [20, 10, 50, 80, 40, 30];
function csort(array) {
  let len = array.length;
  for (let i = len; i > 0; i--) {
    for (let x = len; x > 0; x--) {
      if (array[x] > array[x - 1]) {
        [array[x], array[x - 1]] = [array[x - 1], array[x]];
      }
    }
  }
  return array;
}
console.log(csort(b));
