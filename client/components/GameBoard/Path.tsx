import { Grid, Row, Column } from './GameBoard';

interface PathProps {
  grid: number[][];
}

function generatePath({ grid }: PathProps): string[][] {
  const pathedGrid = [...grid.map((row) => row.map((col) => col.toString()))];
  pathedGrid[0][0] = 'Forced';
  pathedGrid[5][5] = 'Forced';

  return pathedGrid;
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

function Path({ grid }: PathProps) {
  return (
    <>
      <div>In Progress</div>
    </>
  );
}

export default Path;
