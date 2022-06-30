//関数でセレクタを作ってみる
// function $(id) {
//   return document.querySelector(id);
// }
// $('#view').innerHTML = 'あいうえお'

// class Jq {
//   constructor() {
//     this.id = '';
//     return this;
//   }
//   $(id) {
//     this.id = document.querySelector(id);
//     console.log(this.id);
//     return this;
//   }
//   html(h) {
//     console.log(this.id);
//     this.id.innerHTML = h;
//     return this;
//   }
//   css(prop, value) {
//     this.id.setAttribute('style', prop + ':' + value);
//     return this;
//   }
// }
// const $ = new Jq;
// $.$('#view').html('HTML').css('color', 'red');

//prototypeのコンストラクタ
const $ = function $(id) {
  return new $.prototype.init(id);
}
$.prototype = {
  init: function (id) {
    this.id = document.querySelector(id);
    this.style = [];
    return this;
  },
  html: function (h) {
    this.id.innerHTML = h;
    return this;
  },
  css: function (prop, value) {
    this.style.push(prop + ':' + value);
    this.id.setAttribute('style', this.style.join(';'));
    return this;
  }
}
$.prototype.init.prototype = $.prototype;

$('#view').html('HTML').css('color', 'green').css('background-color', 'yellow');