function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));

/*
other ways to solve

function solution(arr) {
  return arr.filter((value, index) => value !== arr[index + 1]);
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));



function solution(arr) {
  var answer = [];
  var x = arr[0];
  var j = 0;
  var i = 1;
  while (true) {
    if (i === arr.length + 1) {
      break;
    }
    if (x !== arr[i]) {
      answer[j] = x;
      j++;
      x = arr[i];
    }
    i++;
  }
  return answer;
}

*/