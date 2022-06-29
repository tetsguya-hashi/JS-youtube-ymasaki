//ファイルを選択したら:changeイベント
document.querySelector("#file").onchange = function () {
  // 各FileAPIが使用可能であれば中を処理していく
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    //FileListを取得
    const input = document.querySelector("#file").files[0];
    const reader = new FileReader();//インスタンス化
    reader.onerror = function () {
      alert('読み取り時にエラーが発生しました。')
    };
    reader.onload = function () {
      document.querySelector('#result').src = reader.result;
      Caman('#result', function () {
        this.brightness(10);
        this.contrast(30);
        this.sepia(60);
        this.saturation(-30);
        this.render();
      });
    }
    reader.readAsDataURL(input);
  }
}
