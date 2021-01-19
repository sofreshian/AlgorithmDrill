const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  const result = [];
  let choicesCount = 0;
  let point = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0 && choicesCount === i) {
        choicesCount++;
        if (result[result.length - 1] === board[j][moves[i] - 1]) {
          result.pop();
          point += 2;
        } else result.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
      }
    }
  }
  return point;
}

console.log(solution(board, moves));

// anothe rway to solve
const solution = (board, moves) => {
  const boardColumn = board.reduce((newColumn, row) => row.map((doll, index) => {
    if (newColumn[index]) return [...newColumn[index], doll];
    return [doll];
  }), []).map(row => row.reverse().filter(doll => doll));

// 행과 열을 바꿔주고 인형이 없는 구간은 제외시켜서 새로운 배열을 만든다. 

  const selectedItem = [];
  const result = moves.reduce((point, move) => {
    const selectedDoll = boardColumn[move - 1].pop();
    if (selectedDoll) {
      if (selectedDoll === selectedItem[selectedItem.length - 1]) {
        selectedItem.pop();
        return point + 2;
      }
      selectedItem.push(selectedDoll);
    }
    return point;
  }, 0);
  return result;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1]
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
