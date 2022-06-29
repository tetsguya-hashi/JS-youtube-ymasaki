const str = document.querySelector('#str').value;
const pass = document.querySelector('#pass');
const generate = document.querySelector('#generate');
console.log(Math.random())
generate.onclick = function () {
  let box = '';
  let turn = 10;
  let len = str.length;//文字列の長さ
  for (let i = 0; i < turn; i++) {
    //rの中は[0~38]
    const r = Math.floor(Math.random() * len);
    if (Math.floor(Math.random() * 2) == 0) {
      box += str.charAt(r);
    } else {
      box += str.charAt(r).toUpperCase();
    }
  }
  //passに生成したパスワードを流し込む
  pass.value = box;
}