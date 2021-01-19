/*
8. 수박수박수박수박수박수?
waterMelon 함수는 정수를 인수로 전달받는다. 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라
예를 들어, n이 4이면 '수박수박'을 리턶하고 3이라면 '수박수'를 리턴한다.
*/

function waterMelon(n) {
  const strA = '수';
  const strB = '박';
  let res = '';
  for (let i = 1; i <= n; i++) {
    let temp = '';
    if (i % 2) {
      temp = strA;
    } else {
      temp = strB;
    }
    res += temp;
  }
  return res;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(5));



// other ways to solve

/*
else 의 중요성 
처음에 else를 써주지 않아서 
n이 3인 경우: 수박박수박
n이 4인 경우: 수박박수박박
의 형태가 출력되었다. 반드시 if문의 조건문에는 else의 역할을 간과해선 안된다!
*/
// function waterMelon(n) {
//   let answer = '';
//   for (let i = 1; i <= n; i++) {
//     if (i % 2) answer += '수';
//     else answer += '박';
//   }
//   return answer;
// }


// function waterMelon(n) {
//   const waterMelonArr = Array.from({length: n}, (_, index) => index);
//   return waterMelonArr.reduce((acc, cur) => acc += (cur % 2 ? '박' : '수'), '');
// }