const RANDOM_SENTENCE_URL_API = 'https://api.quotable.io/random';
const typeDisplay = document.getElementById('typeDisplay');
const typeInput = document.getElementById('typeInput');
const timer = document.getElementById('timer');
const typeSound = new Audio('./audio/typing-sound.mp3');
const wrongSound = new Audio('./audio/wrong.mp3');
const correctSound = new Audio('./audio/correct.mp3');
//inputテキスト入力と取得したテキストが合っているか
typeInput.addEventListener('input', () => {
  //正誤判定音を付ける
  typeSound.play();
  typeSound.currentTime = 0;

  const sentenceArray = typeDisplay.querySelectorAll('span');
  // console.log(sentenceArray);
  const arrayValue = typeInput.value.split('');
  let correct = true;
  sentenceArray.forEach((characterSpan, index) => {
    if ((arrayValue[index] == null)) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
      correct = false;
    }
    else if (characterSpan.innerText == arrayValue[index]) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
    } else {
      characterSpan.classList.add('incorrect');
      characterSpan.classList.remove('correct');
      wrongSound.play();
      wrongSound.volume = 0.2;
      wrongSound.currentTime = 0;
      correct = false;
    }
  });
  if (correct == true) {
    correctSound.play();
    correctSound.currentTime = 0;
    RenderNextSentence();
  }
});

//非同期でランダムな文書を取得する
function GetRandomSententce() {
  return fetch(RANDOM_SENTENCE_URL_API)
    .then((response) => response.json())
    .then((data) => data.content);
}
//ランダムな文章を取得して、表示する
async function RenderNextSentence() {
  const sentence = await GetRandomSententce();
  typeDisplay.innerHTML = '';
  //文章を一文字づつ分解してspanで囲む
  let oneText = sentence.split('');
  //forEachで配列を一つずつ取り出して処理、取り出した配列はcharacterに入る
  //characterに入った配列をspanの中に入れる
  oneText.forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    typeDisplay.appendChild(characterSpan);
    // characterSpan.classList.add('correct');
  });
  //テキストボックスの中身を消す
  typeInput.value = '';
  StartTimer();
}
let startTime;
let originTime = 30;

function StartTimer() {
  timer.innerText = originTime;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = originTime - getTimerTime();
    if (timer.innerHTML <= 0) {
      TimeUp();
    }
  }, 1000);

  function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
  }
  function TimeUp() {
    RenderNextSentence();
  }
}
RenderNextSentence();