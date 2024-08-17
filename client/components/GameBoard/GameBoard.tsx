import { useMemo } from 'react';
import Path from './Path';
import type { Board } from '../../../models/Models';

export type Grid = Board['grid'];
export type Row = Board['row'];
export type Column = Board['column'];

function generateBoardData(): Grid {
  const gameBoard: Grid = [];
  const generateTiles: number = 6;

  for (let i = 0; i <= generateTiles; i++) {
    const gridRow: Row = [];
    let countColumn: Column = generateTiles;

    while (countColumn > 0) {
      gridRow.push(0);
      countColumn--;
    }
    gameBoard.push(gridRow);
  }
  return gameBoard;
}

export default function GameBoard() {
  //  param = difficulty: number
  const initialBoard = useMemo(() => generateBoardData(), []);
  // const [board, setBoard] = useState<Grid>(initialBoard);

  return (
    <>
      <div className="game-board">
        <Path grid={initialBoard} />
      </div>
    </>
  );
}
