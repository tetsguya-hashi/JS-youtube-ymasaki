class DateFunc {
  //ClassをNewした時にconstructorが一番最初に実行される
  constructor() {
    this.day = ["日", "月", "火", "水", "木", "金", "土"];
    this.D;
  }
  //Dateオブジェクトを使えるように
  D() {
    this.D = new Date();
    //const d = new Date()
    //return d;これと上一行は同じ
  }
  //年を取得
  year() {
    return this.D.getFullYear();
  }
  //月を取得
  month() {
    return this.D.getMonth() + 1;
  }
  //日を取得
  dayval() {
    return this.D.getDate();
  }
  //曜日を取得
  dayWeek() {
    const week = this.D.getDay();
    return this.day[week];
  }
  //二桁
  _o(s) {
    return ('0' + s).slice(-2);
  }
  //年-月-日
  _D() {
    return '-';
  }
}
const dateFunc = new DateFunc();
dateFunc.D();
const y = dateFunc.year();
const m = dateFunc.month();
const d = dateFunc.dayval();
const w = dateFunc.dayWeek();
const h = dateFunc._D();
document.querySelector('h1').innerHTML = y + h + m + h + d + h + w;