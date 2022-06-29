//画面：タイマー秒数、スタートボタン、何秒たったか表示
//スタートクリックイベント
const time = document.querySelector('#time');
const sec = document.querySelector('#sec');
const start = document.querySelector('#start');
const sound = document.querySelector('#sound');
let count = 0;
const setsec = 1000;

start.onclick = function () {

  const set_id = setInterval(function () {
    count++;
    time.innerHTML = count;
    if (count == sec.value) {
      sound.play();
      clearInterval(set_id);
    }
  }, setsec);
}
  //setINterval(); clearInterval();