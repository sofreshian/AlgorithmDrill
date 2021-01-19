// 3. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는
// alphaString46 함수를 완성하라

// 예를 들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다.

// function alphaString46(str) {
//   if (str !== undefined && str.length >= 4 && str.length <= 6 && (Number.isNaN(1 * str) !== true)) {
//     return true;
//   } return false;
// }

// console.log(alphaString46('1234')); // true
// console.log(alphaString46('9014')); // true
// console.log(alphaString46('723')); // false
// console.log(alphaString46('a234')); // false
// console.log(alphaString46(''));// false
// console.log(alphaString46()); // false


/*
errorable part
위의 코드는 만약 조건문의 순서가 바뀔 경우, 에러가 발생될 수 있다. 
예를 들어 빈 공란인 경우 처음에 조건문에서 길이를 판단하지 못한다.(Cannot read property of 'length' of undefined)

정규표현식을 쓰면 이러한 문제를 간단히 해결할 수 있다.
^ = 시작하는 문자열을 찾는다 / [...] 내에서 ^은 not을 의미한다.
\d = 숫자를 의미한다
$ = 문자열의 마지막을 의미한다.
{m, n} = m회 이상 n회 이하 나타나는 문자
+ = 앞선 패턴이 최소 한 번이상 반복되는 문자열을 의미한다. 즉, +는 {1, }과 같다.
예를 들어 const regExp = /A+/g; 의 경우, 'A'가 최소 한 번 이상 반복되는 문자열('A', 'AA', 'AAA' ...)을 전역 검색한다.
*/

function alphaString46(s) {
  return /^\d{4,6}$/.test(s);
}

console.log(alphaString46('23a4')); // false