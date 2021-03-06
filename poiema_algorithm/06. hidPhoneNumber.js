/*
6. 핸드폰 번호 가리기
핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다.
전화번호를 나타내는 문자열 str을 입력받은 hideNumbers 함수를 완성하라 예를 들어, s가 '01033334444'면
*******4444를 리턴하고, '027778888'인 경우는 ******8888을 리턴한다.
*/

function hideNumbers(str) {
  const temp = str.slice(-4);
  return '*'.repeat(str.length - 4) + temp;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888



// other ways to solve

// function hideNumbers(str) {
//   const arr = [...str];
//   arr.splice(0, str.length - 4);
//   for (let i = 0; i < str.length - 4; i++) {
//     arr.unshift('*');
//   }
//   return arr.join('');
// }


// function hideNumbers(str) {
//   return [...str].map((num, index, arr) => index > arr.length - 5 ? num : '*').join('');
// }