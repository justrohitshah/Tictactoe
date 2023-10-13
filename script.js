
let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];
const statusElement = document.getElementById('status');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

const checkWin = () => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      setTimeout(() => alert(`${board[a]} Congratulations :) You Nailed it  `), 100);
      resetGame();
      return;
    }
  }

  if (!board.includes('')) {
    setTimeout(() => alert('It\'s a draw!'), 100);
    resetGame();
  }
};

const resetGame = () => {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    cells[i].innerHTML = '';
    cells[i].style.pointerEvents = 'auto';
  }
  currentPlayer = 'X';
  statusElement.innerText = "Player X's turn";
};

const handleClick = (index) => {
  if (board[index] || currentPlayer === '') return;

  board[index] = currentPlayer;
  cells[index].innerHTML = currentPlayer;
  cells[index].style.pointerEvents = 'none';

  checkWin();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusElement.innerText = `Player ${currentPlayer}'s turn`;
};

const createBoard = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => handleClick(i));
  }
};

resetButton.addEventListener('click', resetGame);

window.onload = () => {
  createBoard();
};
