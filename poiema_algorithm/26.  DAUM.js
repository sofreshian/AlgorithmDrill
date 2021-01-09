/*
26. 최단 거리 1차원 점의 쌍 구하기(DAUM)
1차원 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라.
(단, 점들의 배열은 모두 정렬되어 있다고 가정하자) 예를 들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면,
결과값은 [[3, 4], [23, 24]]가 될 것이다.
*/
function findMinDistance(array) {
  let res = [...array];
  let temp = [];
  let index = [];
  let goal = [];
  for (let i = 0; i < res.length; i++) {
    temp[i] = res[i + 1] - res[i];
  }
  temp = temp.splice(0, res.length - 1);
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] === Math.min(...temp)) {
      index.push(j);
    }
  }
  for (let k = 0; k < index.length; k++) {
    goal.push([res[index[k]], res[index[k] + 1]]);
  }
  return goal;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]