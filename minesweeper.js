const exampleBoard = [

[' ', ' ' ,' ']
[' ', ' ' ,' ']
[' ', ' ' ,' ']

];


const printBoard = exampleBoard => {
console.log('Current Board:')
// Log 'Current Board: '
// Log the first element of the board varible
console.log(board[0].join(' | '));
console.log(board[1].join(' | '));
console.log(board[2].join(' | '));

};

printBoard(exampleBoard);
exampleBoard[0][1] = '1';
exampleBoard[1][0] = 'B';
printBoard(exampleBoard);
