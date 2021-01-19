/*
2. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라
단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
예를 들어 8808은 3, 8888은 4로 카운팅 해야 한다.
(힌트! str.charAt(n), str[n])
*/

// 1. 이중 for 문으로 풀기
function eightCount() {
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    const target = i.toString();
 // const target = i + '';
    for (let j = 0; j < target.length; j++) {
      if (target[j] === '8') count++;
    }
  }
  return count;
}


// 2. 모든 수를 한줄로 나열해서 풀기
function eightCount() {
  let str = '';
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    str += i;
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '8') count++;
  }
  return count;
}

console.log(eightCount());


/*
errorable part 
세었던 수를 반복해서 또 세는 실수가 일어난다. 8을 뒤에 1~18일때 또 '8'을 카운팅한다
- 숫자 하나 하나씩 비교하거나
- 숫자를 전부 붙여서 비교할때는 for문을 나눠서 해결해야 한다.
*/
function eightCount() {
  let str = ''
  let count = 0;
  for (let i = 0; i <= 10000; i++) {
    str += i;
    for (let j = 0; j < str.length; j++) {
      if(str[j] === '8') count++;
    }
  }
  return count;
}

/* another way to solve

function getCount8() {
  const nums = Array.from({ length: 10000 }, (_, i) => ++i);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    while(n > 0) {
      if (num % 10 === 8) count++;
      num = Math.floor(num / 10);
    }
  }
  return count;
}
*/