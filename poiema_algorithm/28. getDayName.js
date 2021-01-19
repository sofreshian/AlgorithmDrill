/*
28. 요일 구하기
2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까? 두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는
getDayName 함수를 완성하라

요일의 이름은 일요일부터 토요일까지 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다. 예를 들어 a = 5, b = 24가 입력된다면
5월 24일은 화요일이므로 TUE를 반환한다.
*/

function getDayName(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const year = '2016';
  const month = a;
  const day = b;
  const dayOfweek = week[new Date(year + '/' + month + '/' + day).getDay()];
  return dayOfweek;
}

console.log(getDayName(5, 24)); // TUE

// other ways to solve
function getDayName(a, b) {
  let date = new Date(2016, (a - 1), b);
  return date.toString().slice(0, 3).toUpperCase();
}
console.log(getDayName(5, 24));



function getDayName(a, b) {
  let arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay();
  return arr[day];
}
console.log(getDayName(5, 24));