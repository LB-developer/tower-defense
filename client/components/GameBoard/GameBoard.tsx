import { useMemo, useState } from 'react';

const generateBoardData = (): number[][] => {
  const gameBoard: number[][] = [];
  const generateTiles: number = 6;

  for (let i = 0; i <= generateTiles; i++) {
    const gridRow: number[] = [];
    let count = generateTiles;

    while (count > 0) {
      gridRow.push(count);
      count--;
    }
    gameBoard.push(gridRow);
  }
  return gameBoard;
};

const renderBoardJSX = (board: number[][]): JSX.Element[] => {
  return board.map((row, rowIndex) => (
    <div key={`board-row-${rowIndex}`} className={`row-${rowIndex}`}>
      {row.map((col, colIndex) => (
        <div
          className={`column-${colIndex}`}
          key={`board-row-${rowIndex}-column-${colIndex}`}
        >
          {col}
        </div>
      ))}
    </div>
  ));
};

export default function GameBoard() {
  //  param = difficulty: number
  const initialBoard = useMemo(() => generateBoardData(), []);
  const [board, setBoard] = useState(initialBoard);

  return (
    <>
      <div className="game-board">{renderBoardJSX(board)}</div>
    </>
  );
}
