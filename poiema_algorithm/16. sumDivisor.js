/*
16. 약수의 합
어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라
예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이되므로 28을 반환한다.
약수는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다
*/

function sumDivisor(num) {
  const temp = [];
  for (let i = num; i > 0; i--) {
    if (num % i === 0) temp.push(i);
  }
  // const result = temp.reduce((acc, cur) => acc + cur, 0);
  // return result;
  return temp.reduce((acc, cur) => acc + cur, 0);
}

console.log(sumDivisor(12)); // 28