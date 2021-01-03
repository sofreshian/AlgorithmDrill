// 2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라
// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// 예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.
// (힌트! str.charAt(n), str[n])

/*
1. 이중 for 문으로 풀기
function eightCount() {
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    const target = i.toString();
 // const target = i + '';
    for (let j = 0; j < target.length; j++) {
      if (target[j] === '8') count++;
    }
  }
  return count;
}


2. 모든 수를 한줄로 나열해서 풀기
function eightCount() {
  let str = '';
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    str += i;
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '8') count++;
  }
  return count;
}

console.log(eightCount());

*/

