/*
25. 평균 구하기
인수로 주어진 배열의 평균을 구하는 함수를 완성하라
*/

function average(array) {
  const res = array.reduce((acc, cur, i, { length }) =>
    (i === length - 1 ? (acc + cur) / length : acc + cur), 0);
  return res;
}

console.log(average([5, 3, 4])); // 4