function solution(n, lost, reserve) {
  let answer = 0;
  const setArr = [];
  for (let i = 1; i <= n; i++) {
    setArr.push(1);
    if (reserve.includes(i)) {
      setArr[i - 1]++;
    }
    if (lost.includes(i)) {
      setArr[i - 1]--;
    }
  }
  for (let i = 0; i < n; i++) {
    if (!setArr[i]) {
      if (setArr[i - 1] === 2) {
        setArr[i]++;
        setArr[i - 1]--;
      } else if (setArr[i + 1] === 2) {
        setArr[i]++;
        setArr[i + 1]--;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (setArr[i] >= 1) {
      answer++;
    }
  }
  // console.log(setArr);
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));


// another way to solve
function solution(n, lost, reserve) {
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r - a) <= 1)
    if(!b) return true;
    reserve = reserve.filter(r => r !== b)
  }).length;
}

console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));