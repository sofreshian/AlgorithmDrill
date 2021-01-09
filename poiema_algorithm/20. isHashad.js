/*
20. 하샤드 수
하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어 지는 양의 정수를 말한다.
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 나누어져야 한다. 예를 들어 18의 자릿수의 합은 1 + 8 = 9이고,
18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
*/

function isHarshad(n) {
  let str = n + '';
  // str.split(''); split은 배열이 안되는 이유는 암묵적 타입변환을 해서  원본은 변경이 안되어서 그런거 같다.
  str = [...str];
  const num = str.reduce((acc, cur) => acc + +cur, 0);
  if (n % num === 0) return true;
  return false;
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
