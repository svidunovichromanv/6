'use strict'
var n = 0;
let arr = [];
const arrVow = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
function counterVowel1(str){
  str = str.toLowerCase();
  arr = str.split('');
  arr.forEach(function(item1) {
    arrVow.forEach(function(item2) {
      if (item1 === item2) {++n};
    })
});
  return n; 
}
function counterVowel2(str){
  str = str.toLowerCase();
  arr = str.split('');
  arr = arr.filter(item => arrVow.some(el => el === item));
  return arr.length; 
}
function counterVowel3(str){
  str = str.toLowerCase();
  arr = str.split('');
  var n = 1;
  let result = arr.reduce((v, item) => {
    if (arrVow.some(el => el === item)){
      return v = ++n;
    }else{
      return v;
    }
  });
  return result; 
}
console.log(counterVowel3('АвыkcdxчваААя'));//6
console.log(counterVowel2('АвыkcdxчваААя'));//6
console.log(counterVowel1('АвыkcdxчваААя'));//6