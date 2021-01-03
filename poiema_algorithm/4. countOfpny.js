// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다. s에 존재하는 'p'의 개수와 'y'의 갯수를 비교해
// 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 대소문자를 구별하지 않으며 'p', 'y'모두 하나도 없는 경우는
// 항상 true를 리턴한다.

// 예를 들어 s가 'pPooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

// const target = 'pPooyY';
// // console.log(target.includes('p'));
// var result = target.search('P');
// console.log(result);

// function numPY(str) {
//   let countP = 0;
//   let countY = 0;
//   if (str === undefined || str.length < 1 && (str.includes('p') || str.includes('P') || str.includes('y') || str.includes('Y'))) return true;
//   for (let i = 0; i < str.length; i++) {
//     if ((str[i].includes('p') || str[i].includes('P'))) {
//       countP++;
//     }
//     if ((str[i].includes('y') || str[i].includes('Y'))) {
//       countY++;
//     }
//   }
//   if (countP === countY) return true;
//   return false;
// }
function numPY(str) {
  let countP = 0;
  let countY = 0;
  if (str === undefined || str.length < 1 && 
      (Array.from('p').some(item => (item === 'p' || item === 'P' || item === 'y' || item === 'Y')))) return true;
  for (let i = 0; i < str.length; i++) {
    if ((str[i].includes('p') || str[i].includes('P'))) {
      countP++;
    }
    if ((str[i].includes('y') || str[i].includes('Y'))) {
      countY++;
    }
  }
  if (countP === countY) return true;
  return false;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true
