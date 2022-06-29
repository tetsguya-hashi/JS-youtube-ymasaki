//追加イベント
const titles = [];
let i = 0;
$('#add').on('click', function () {
  //#viewに表示されているものはempty();で削除
  $('#view').empty();
  //#titleのvalueを取得
  const title = $('#title').val();
  //配列にvalueを追加（push）
  titles.push(title);
  //#viewに表示する
  titles.map((title, i) => $('#view').prepend('<div class="delete" data-titles="' + i + '">' + titles[i] + '</div>'));
  // for (let i = 0; i < titles.length; i++) {
  //   $('#view').prepend('<div class="delete" data-titles="' + i + '">' + titles[i] + '</div>');
  // }
})


//削除イベント
$('div').on('click', '.delete', function () {
  $('#view').empty();
  //配列から一つ削除
  titles.splice($(this).attr('data-titles'), 1);
  //配列を削除後再表示
  titles.map((title, i) => $('#view').prepend('<div class="delete" data-titles="' + i + '">' + titles[i] + '</div>'));
  // for (let i = 0; i < titles.length; i++) {
  //   $('#view').prepend('<div class="delete" data-titles="' + i + '">' + titles[i] + '</div>');
  // }
})
