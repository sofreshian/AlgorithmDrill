/*
18. 피보나치 수
피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 
2 이상의 n이 입력되었을 때, n번째 피보나치 수를 반환하는 fibonacci 함수를 작성하라. 예를 들어 n = 3이라면 2를 반환한다. 
*/
// 1. while 문으로 작성
// function fibonacci(n) {
//   let beforePrev = 0;
//   let prev = 1;
//   let curret = beforePrev + prev;
//   if (n <= 1) return n;
//   while (n > 2) {
//     // 핵심구간 (2는 판단가능 선택지에서 제외시키는게 핵심!)
//     beforePrev = prev;
//     prev = curret;
//     curret = beforePrev + prev;
//     --n;
//   }
//   return curret;
// }

// 2. 재귀 함수문으로 작성
function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// + for문으로 피보나치 수열 나열하기
function printfibonacci(num) {
  let res = '';
  for (let i = 0; i < num; i++) {
    res += fibonacci(i) + '';
  }
  return res;
}

console.log(printfibonacci(5));



console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8