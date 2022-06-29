const G = {
  read_file: document.getElementById('file'),
  output_text: document.getElementById('output_text'),
  input_text: document.getElementById('input_text'),
  start: document.getElementById('start'),
  total: document.getElementById('total'),
  texts: [],
  score: 0
}
//***************************************
//関数
//***************************************
//ファイルを読み込んだら実行
function readFile(e) {
  const file = e.target.files[0];//ファイル情報を代入
  const reader = new FileReader();//ファイルリーダーのインスタンス化
  reader.onload = function () {//読み込み完了後にloadする
    G.texts = reader.result.split('\n');//配列変換して代入
  }
  reader.readAsText(file);//textFileをRead
}
//シャッフルテキスト処理
function shuffleText() {
  G.input_text.value = '';//入力文字を削除
  const rf = Math.random() * G.texts.length;//配列の数分だけ、乱数を作成
  const r = Math.floor(rf);//小数点以下切り捨て
  G.output_text.value = G.texts[r];//配列からn番目を取得
}
//キーダウン処理
function keyEvent(e) {
  if (G.output_text.value === G.input_text.value) {
    shuffleText();
    G.score++;
    G.total.textContent = G.score;
  }
}



//***************************************
//イベントと関数の紐づけ
//***************************************
G.start.onclick = shuffleText;
G.read_file.onchange = readFile;
G.input_text.onkeydown = keyEvent;

