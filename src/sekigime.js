const member = ['山崎', '鈴木', '田中', '中田', '山岸', '林', '山本', '斎藤', '佐藤']
const column = 4;//列を指定
let len = member.length;//配列の数
//繰り返し処理
for (let i = 0; i < len; i++) {
  const r = Math.floor(Math.random() * member.length);
  const v = member.splice(r, 1);//r番目の配列を１つ取り出す
  //column変数で改行
  if ((i + 1) % column == 0) {
    $('#seki').append('|' + v + '<br>');
  } else {
    $('#seki').append('|' + v);
  }
}