/*
19. 각 자릿수의 합 구하기
정수 n이 주어지면, n의 각 자릿수의 합을 구해서 반환하는 digitSum 함수를 완성하라. 예를 들어 n = 123이면 1 + 2 + 3 = 6을
반환한다.
단, n은 100,000,000 이하의 정수로 한다
*/
function digitSum(n) {
  if (n <= 10 ** 8) {
    let res = n + '';
    res = [...res];
    return res.reduce((acc, cur) => acc + +cur, 0);
  } return false;
}

console.log(digitSum(123));  // 6
console.log(digitSum(987));  // 24
console.log(digitSum(100000001));  // false