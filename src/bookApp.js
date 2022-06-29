//検索ボタンをクリックしたら
$('#send').on('click', function () {
  const url = 'https://www.googleapis.com/books/v1/volumes?q=' + $('#key').val();
  $.ajax({
    url: url,
    dataType: "json"
  }).done(function (data) {
    console.log(data);
    const len = data.items.length;
    let html;
    for (let i = 0; i < len; i++) {
      html += `
        <tr>
          <td>${data.items[i].volumeInfo.title}</td>
          <td>${data.items[i].volumeInfo.publisher}</td>
          <td><img src="${data.items[i].volumeInfo.imageLinks.thumbnail}" alt=""></td>
          <td><a href="${data.items[i].volumeInfo.infoLink}">詳細リンク</a></td>
        </tr>
      `;
    }

    $('#list').empty().hide().append(html).fadeIn(1000);
  });
});