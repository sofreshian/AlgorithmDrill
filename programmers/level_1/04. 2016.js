function solution(a, b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const year = '2016';
  const month = a;
  const day = b;
  const dayOfWeek = week[new Date(year + '/' + month + '/' + day).getDay()];
  return dayOfWeek;
}
console.log(solution(5, 26));

// another way to solve
function getDayName(a, b) {
  let date = new Date(2016, (a - 1), b);
  return date.toString().slice(0, 3).toUpperCase();
}
console.log(getDayName(5, 24));