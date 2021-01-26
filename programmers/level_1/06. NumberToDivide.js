function solution(arr, divisor) {
  const answer = [];
  arr.forEach(item => (item % divisor === 0 ? answer.push(item) : answer));
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer.sort((a, b) => a - b);
}

const arr = [5, 9, 7, 10];
const divisor = 5;
console.log(solution(arr, divisor));

// other ways to solve
function solution(arr, divisior) {
  const answer = arr.filter(v => v % divisior === 0);
  return answer.sort((a, b) => a - b);
}