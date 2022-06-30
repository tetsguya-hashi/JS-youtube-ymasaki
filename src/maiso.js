const container = document.querySelector('.container');
const text = document.getElementById('text');
const coutText = document.getElementById('count');

let totalTime = 19000;
let breathTime = 4000;
let holdTime = 7000;

function maditateAnimation() {
  text.innerHTML = '吸って'
  container.className = 'container grow';
  setTimeout(() => {
    text.innerHTML = '止めて'
    setTimeout(() => {
      text.innerHTML = '吐いて'
      container.className = 'container shrink';
    }, holdTime)
  }, breathTime)
}
maditateAnimation();
let count = 0;
setInterval(() => {
  count++;
  coutText.innerHTML = ' 回数：' + count;
  maditateAnimation();
}, totalTime);