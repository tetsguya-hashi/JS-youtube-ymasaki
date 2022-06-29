const arry = ['A', 'B', 'C', 'D', 'E', 'F'];

const arryLength = arry.length;

for (i = 0; i < arryLength; i++) {

  const random = Math.floor(Math.random() * arry.length);
  //spliceで配列からn番目を取り出す
  const v = arry.splice(random, 1);
  console.log(v);
}
