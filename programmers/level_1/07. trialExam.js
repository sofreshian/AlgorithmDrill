function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const { length } = answers;
  for (let i = 0; i < length; i++) {
    if (one[i % one.length] === answers[i]) result[0]++;
    if (two[i % two.length] === answers[i]) result[1]++;
    if (three[i % three.length] === answers[i]) result[2]++;
  }
  const answer = [];
  const maxValue = Math.max(...result);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));

// other ways to solve
/*
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const answer = [];

  const oneC = answers.filter((a, i) => a === one[i % one.length]).length;
  const twoC = answers.filter((a, i) => a === two[i % two.length]).length;
  const threeC = answers.filter((a, i) => a === three[i % three.length]).length;
  const max = Math.max(oneC, twoC, threeC);

  if (oneC === max) { answer.push(1); }
  if (twoC === max) { answer.push(2); }
  if (threeC === max) { answer.push(3); }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));



function solution(answers) {
  const examinee = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  const answer = [];
  const points = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (examinee[0][i % 5] === answers[i]) { points[0]++; }
    if (examinee[1][i % 8] === answers[i]) { points[1]++; }
    if (examinee[2][i % 10] === answers[i]) { points[2]++; }
  }

  // console.log(points);
  const max = Math.max(...points);

  for (let i = 0; i < 3; i++) {
    if (points[i] === max) answer.push(i + 1);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
*/