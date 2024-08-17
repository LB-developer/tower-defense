import { Grid } from "./GameBoard"

interface PathProps {
  grid: number[][]
}

function generatePath(unpathedBoard: number[][]) {
  const pathedGrid = [...unpathedBoard]
  let visited = new Set()
  let tileCount = 1

  const makePath = (posY: number, posX: number) => {
    if (posY === 5 && posX === 5) {
      pathedGrid[posY][posX] = tileCount
      tileCount++
      return true
    } // goal is found

    if (
      posY < 0 ||
      posX < 0 ||
      posY >= pathedGrid.length ||
      posX >= pathedGrid[0].length ||
      visited.has(`${posY},${posX}`)
    ) {
      return false
    }

    visited.add(`${posY},${posX}`)

    const directions = [
      [posY, posX + 1], // Move right
      [posY, posX - 1], // Move left
      [posY + 1, posX], // Move down
    ]

    directions.sort(() => Math.random() - 0.5) // pick a random direction

    for (const [newY, newX] of directions) {
      if (makePath(newY, newX)) {
        pathedGrid[posY][posX] = tileCount
        tileCount++
        return true
      } // path to goal is found
    }

    return false
  }
  makePath(0, 0)
  return pathedGrid
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
  ))
}

function Path({ grid }: PathProps) {
  return <>{renderBoardJSX(generatePath(grid))}</>
}

export default Path
