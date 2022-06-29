const textEditor = document.querySelector('#editor');
let editor;
ClassicEditor
  .create(textEditor)
  .then(newEditor => {
    editor = newEditor;
    if (localStorage.getItem('memo')) {
      editor.setData(localStorage.getItem('memo'));
    }
  })
  .catch(error => {
    console.error(error);
  });

document.querySelector('#save').onclick = function () {
  const textValue = editor.getData();
  console.log(textValue);
  localStorage.setItem('memo', textValue);
}