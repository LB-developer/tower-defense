import { useMemo, useState } from 'react';
import Path from './Path';
import type { GameBoard } from '../../../models/Models';

type Grid = GameBoard['grid'];
type Row = GameBoard['row'];
type Column = GameBoard['column'];

function generateBoardData(): Grid {
  const gameBoard: Grid = [];
  const generateTiles: number = 6;

  for (let i = 0; i <= generateTiles; i++) {
    const gridRow: Row = [];
    let countColumn: Column = generateTiles;

    while (countColumn > 0) {
      gridRow.push(countColumn);
      countColumn--;
    }
    gameBoard.push(gridRow);
  }
  return gameBoard;
}

function renderBoardJSX(board: Grid): JSX.Element[] {
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
}

export default function GameBoard() {
  //  param = difficulty: number
  const initialBoard = useMemo(() => generateBoardData(), []);
  const [board, setBoard] = useState<Grid>(initialBoard);
  const setPathToBoard = () => setBoard(Path(board));

  return (
    <>
      <div className="game-board">{renderBoardJSX(board)}</div>
    </>
  );
}
