import { Grid } from './GameBoard';

interface PathProps {
  grid: number[][];
}

function generatePath(unpathedBoard: number[][]) {
  const pathedGrid = [...unpathedBoard];
  let pathFound = false;
  let tileCount = 0;

  const makePath = (posY: number, posX: number) => {
    if (pathFound) return;
    if (posY === 5 && posX === 5) {
      pathFound = true;
      return;
    }

    const possibleDirections = [];

    if (
      posY < 0 ||
      posX < 0 ||
      posY >= pathedGrid.length ||
      posX >= pathedGrid[0].length
    )
      return; // check boundary

    pathedGrid[posY][posX] = tileCount + 1; // define current tile as path
    tileCount++;

    if (posX + 1 < pathedGrid[0].length && pathedGrid[posY][posX + 1] === 0) {
      possibleDirections.push([posY, posX + 1]);
    } // move right is possible
    if (posX - 1 >= 0 && pathedGrid[posY][posX - 1] === 0) {
      possibleDirections.push([posY, posX - 1]);
    } // move left is possible
    if (posY + 1 < pathedGrid.length && pathedGrid[posY + 1][posX] === 0) {
      possibleDirections.push([posY + 1, posX]);
    } // move down is possible

    if (possibleDirections.length === 0) return;

    const random: number = Math.floor(
      Math.random() * possibleDirections.length,
    ); // choose a random direction
    const [randomY, randomX] = possibleDirections[random];

    makePath(randomY, randomX); // move in the random direction chosen
  };

  makePath(0, 0);
  return pathedGrid;
}
function renderBoardJSX(board: Grid): JSX.Element[] {
  return board.map((row, rowIndex) => (
    <div key={`board-row-${rowIndex}`} className={`row-${rowIndex}`}>
      {row.map((col, colIndex) => (
        <div
          className={
            col > 0 ? `column-${colIndex} path` : `column-${colIndex} wall`
          }
          key={`board-row-${rowIndex}-column-${colIndex}`}
        >
          {col}
        </div>
      ))}
    </div>
  ));
}

function Path({ grid }: PathProps) {
  return <>{renderBoardJSX(generatePath(grid))}</>;
}

export default Path;
