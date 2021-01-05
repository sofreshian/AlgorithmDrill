/*
12. 중복 요소 제거
인수로 전달된 배열의 요소 중에서 중복된 요소를 제외하고 유니크한 요소만을 반환하는 함수를 작성하라
for 문은 사용하지 않도록 하자
*/
// Array.prototype.reduce로 해결
function uniq(array) {
  const result = array.reduce((acc, cur, i, arr) => {
    if (arr.indexOf(cur) === i) acc.push(cur);
    return acc;
  }, []);
  return result;
}

// Array.prototype.filter로 해결
function uniq(array) {
  const result = array.filter((v, i , arr) => arr.indexOf(v) === i);
  return result;
}

// set을 이용하여 해결
function uniq(array) {
  const result = [...new Set(array)];
  return result;
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]