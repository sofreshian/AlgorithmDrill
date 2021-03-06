/* 
5. 이상한 문자 만들기
toWeirdCase 함수는 문자열을 인수로 전달받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는
소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라
예를 들어 s가 'hello world'라면 첫 번째 단어는 'HeLlO', 두번재 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

주의) 문자열 전체의 짝 / 홀 인덱스가 아니라 단어 (공백을 기준)별로 짝 / 홀수 인덱스를 판단한다.
*/

function toWeirdcase(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let temp = '';
    if (i % 2) {
      temp += s[i];
    } temp += s[i].toUpperCase();
    res += temp;
  }
  return res;
}

console.log(toWeirdcase('hello world'));
console.log(toWeirdcase('my name is lee'));

// otehr ways to solve
// function toWeirdCase(s) {
//   if (!s) return '';
//   s = s.toLowerCase();

//   const strings = s.split(' ');
//   // console.log(strings);

//   const checkAndSwitch = (str) => {
//     return [...str].map((char, index) => {
//       if (index % 2 === 0) char = char.toUpperCase();
//       return char;
//     }).join('');
//   };
  
//   strings.forEach((string, index, array) => {
//     array[index] = checkAndSwitch(string);
//   });

//   return strings.join(' ');
// }