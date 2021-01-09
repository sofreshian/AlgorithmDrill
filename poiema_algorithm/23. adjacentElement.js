/*
23. 배열의 인접한 요소곱 중 가장 큰 값 구하기
인수로 주어진 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라. 예를 들어 인수가
[3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.
*/

function adjacentElementsProduct(arr) {
  const res = [...arr];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(res[i] * res[i + 1]);
  }
  return Math.max(...temp.splice(0, temp.length - 1));
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21


// if (i === arr.length - 1) return res.push(arr[i]);