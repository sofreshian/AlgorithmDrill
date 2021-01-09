/*
27. 특별한 정렬
n개의 정수를 가진 배열이 있다. 이 배열은 양의 정수와 음의 정수를 모두 가지고 있다. 이배열을 좀 특별한 방법으로
정렬해야 한다. 음의 정수는 앞쪽에 내림차순으로, 양의 정수는 뒷쪽에 있어야 한다. 단, 인수로 주어진 배열은 변경되지
않아야 한다.
*/

function specialSort(array) {
  let temp = [...array];
  const res = [];
  let pos = temp.filter(item => item >= 0);
  let neg = array.filter(item => item < 0);
  pos.sort((a, b) => a - b);
  neg.sort((a, b) => b - a);
  res.push(...neg, ...pos);
  return res;
}

const testArray = [-1, 1, 3, -2, 2, 0];

// console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]