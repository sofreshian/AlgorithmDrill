/*
17. 소수 찾기
numberOfPrime 메서드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록
numberOfPrime 함수를 완성하라. 예를 들어 10을 입력 받았다면, 1부터 10사이의 소수 [2, 3, 5, 7] 4개가 존재하므로
4를 반환한다.

소수(prime number)는 2, 3, 5, 7, 11, 13, 17과 같이 1과 자신 이외의 어떤 수로 나눠지지 않는 1보다 큰 양의 정수다.
hint! "에라토스테네스의 체 bookmark"
*/
function numberOfPrime(n) {
  const arr = [];
  for (let i = 1; n >= i; i++) arr.push(i);

  for (let i = 1; i * i < n; i++) {
    if (arr[i]) {
      const num = arr[i];
      for (let j = num * num; j <= n; j += num) {
        arr[j - 1] = 0;
      }
    }
  }
  const answer = arr.filter(number => number);
  answer.shift();
  return answer.length;
}

console.log(numberOfPrime(10)); // 4
