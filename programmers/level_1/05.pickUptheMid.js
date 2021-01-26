function solution(str) {
  let answer = '';
  const half = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    answer += (str[half - 1] + str[half]);
  } else {
    answer = str[half];
  }
  return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));


// otehr ways to solve

function solution(str) {
  const half = Math.floor(str.length / 2);
  return str.length % 2 === 1 ? str[half] : str[half -1] + str[half];
}

function solution(str) {
  return str.substring(Math.ceil(str.length / 2) - 1, Math.floor(str.length / 2) + 1);
}
console.log(solution('abcde'));
console.log(solution('qwer'));
